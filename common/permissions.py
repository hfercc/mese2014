from rest_framework.permissions import BasePermission, SAFE_METHODS
from accounts.models import HasReportsMixin, Person
from .utils import check_base_class_by_name

def HasObject(field_name):
	
	class P(BasePermission):
		
		def has_object_permission(self, request, view, obj):
			user = obj
			for attr_name in field_name.split('.'):
				user = getattr(user, attr_name, None)
				if user is None:
					break

			return request.user and request.user == user
	
	return P

def IsSubClass(cls_name, safe_methods = False):
	
	class P(BasePermission):
		
		def has_permission(self, request, view):
			if isinstance(cls_name, type):
				condition = isinstance(request.user.profile.info, cls_name)
			else:
				condition = check_base_class_by_name(request.user.profile.info, cls_name)
			return safe_methods and (request.method in SAFE_METHODS) or request.user and request.user.profile and condition
			
	return P

class HasReport(BasePermission):

	def has_permission(self, request, view):
		print request.user, request.user.profile.info
		return request.user and isinstance(request.user.profile.info, HasReportsMixin)
		
class IsAdminUser(BasePermission):

	def has_permission(self, request, view):
		if request.method in SAFE_METHODS:
			return request.user
		else:
			return request.user and request.user.is_staff
			
class IsPerson(BasePermission):
	
	def has_permission(self, request, view):
		return request.user and isinstance(request.user.profile.info, Person)
		
class OwnsObject(BasePermission):
	
	def has_object_permission(self, request, view, obj):
		return request.user and isinstance(request.user.profile.info, Person) and obj.owner == request.user.profile.info
		
class HasFile(BasePermission):
	
	def has_object_permission(self, request, view, obj):
		user = request.user
		return user and getattr(user.profile.info, user.profile.info.reports_field).bulk_in([obj.pk]).exists()
