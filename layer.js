//需要layui的js和css(或者layer)
//document.write("<link rel='stylesheet' type='text/css' href='../lib/layui/css/layui.css' />");
//document.write("<script src='../lib/layui/layui.js'></script>");

//弹出消息
//图标 0叹号 1对号 2错号 3问号 4锁子 5哭脸 6笑脸
function open_msg(mess, icon) {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.msg(mess, {
			icon: icon
		});
	});
}

//弹出信息框
//信息(标题，内容，图标);
function open_tip(title, mess, icon) {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			title: title,
			type: 0,
			content: mess,
			icon: icon
		});
	});
}

//弹出页面层
//(标题，内容，图标);内容为html代码
function open_html(title, mess, width, height) {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			title: title,
			type: 1,
			content: mess,
			area: [width, height],
			shadeClose: true
		});
	});
}

//弹出iframe网页
//open(标题，网址，宽，高);
function open_url(title, url, width, height) {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			type: 2,
			content: url,
			area: [width, height],
			title: title,
			scrollbar: false  //设置禁止出现滑动条
		});
	});
}

//关闭自身
function close() {
	layui.use('layer', function() {
		var layer = layui.layer;
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.close(index); //再执行关闭
	});
}

//最小化自身
function min() {
	layui.use('layer', function() {
		var layer = layui.layer;
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.min(index);
	});
}

//刷新父页面（同时会关闭自身）
function refuseP() {
	parent.location.reload();
}

//刷新爷页面（父页面的父页面）（同时会关闭自身）
function refusePP() {
	parent.parent.location.reload();
}

//进入加载状态 0圆点加载 1转圈加载
function load(n) {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.load(n);
	});
}

//获取iframe子页面内容高度给iframe标签，用来动态设置高度
function iFrameHeight() {
	var ifm = document.getElementById("iframeId");
	var subWeb = document.frames ? document.frames["iframeId"].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
		ifm.style.height = 'auto'; //关键这一句，先取消掉之前iframe设置的高度
		ifm.style.height = subWeb.body.scrollHeight + 'px';
	}
}
