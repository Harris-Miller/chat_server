
var socket;

$(function() {
	socket = io();
	socket.on('connect', addUser);
	socket.on('updatechat', processMessage);
	socket.on('updateusers', updateUserList);
	$('#datasend').on('click', sendMessage);
	$('#data').on('keypress', processEnterPress);
});

function addUser() {
	socket.emit('adduser', prompt('What\'s your name?'));
};

function processMessage(username, data) {
	$('<b>' + username + ':<b> ' + data + '<br>').insertAfter($('#conversation'));
};

function updateUserList(data) {
	$('#users').empty();
	$.each(data, function(key, value) {
		$('#users').append('<div>' + key + '</div>');
	});
};

function sendMessage() {
	var data = {
		message: $('#data').val()
	}
	$('#data').val('');
	socket.emit('sendchat', data);
	$('#data').focus();
};

function processEnterPress(e) {
	if (e.which == 13) {// enter
		e.preventDefault();
		$(this).blur();
		sendMessage();
	}
};