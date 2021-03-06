from rest_framework import serializers, pagination
from .models import Stock, Share, Application, Log
from accounts.serializers import AccountField

class StockSerializer(serializers.HyperlinkedModelSerializer):

	publisher = AccountField(read_only = True, exclude = ['members'])

	class Meta:
		model = Stock
		exclude = ('publisher_type', 'publisher_object_id')
		
class LogSerializer(serializers.ModelSerializer):

	class Meta:
		model = Log
		fields = ('created_time', 'price')
		
class ShareSerializer(serializers.ModelSerializer):
	
	stock = serializers.Field(source = 'stock.display_name')
	
	class Meta:
		model = Share
		exclude = ('owner_type', 'owner_object_id', 'owner')
		
class ApplicationSerializer(serializers.ModelSerializer):
	
	stock = StockSerializer(fields = ['id', 'display_name'])
	
	class Meta:
		model = Application
		exclude = ('applicant_type', 'applicant_object_id', 'applicant', 'command',)
