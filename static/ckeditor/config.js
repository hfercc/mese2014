﻿/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#000000';
	//config.extraPlugins = 'img';
	config.toolbar=[[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', 'Font', 'FontSize', 'img'],
	['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	['TextColor','BGColor'],
	['Undo', 'Redo'],
	];
	config.removePlugins = 'elementspath';
	config.resize_enabled = false;
};
