function EventEmitter() {
	this.events = new Map();
}

const wrapCallback = (fn, once = false) => ({ callback: fn, once });

EventEmitter.prototype.addLister = function (type, fn, once = false) {
	let handler = this.events.get(type);
	if(!handler) {
		this.events.set(type, wrapCallback(fn, once));
	} else if (handler && typeof handler.callback === 'function') {
		this.events.set(type, [handler, wrapCallback(fn, once)]);
	} else {
		handler.push(wrapCallback(fn, once));
	}
}

EventEmitter.prototype.removeListener = function (type, listener) {
	let handler = this.events.get(type);
	if (!handler) return;
	if (!Array.isArray(handler)) {
		if (handler.callback === listener.callback) this.events.delete(type);
		else return;
	}
}

EventEmitter.prototype.once = function (type, fn) } {
	this.addListener(type, fn, true);
}

EventEmitter.prototype.emit = function (type, ...args) {
	let handler = this.events.get(type);
	if (!handler) return;
	if (Array.isArray(handler)) {
		handler.map(item => {
			item.callback.apply(this, args);
			if (item.once) this.removeListener(type, item);
		})
	} else {
		handler.callback.apply(this, args);
	}
	return true;	
}

EventEmitter.prototype.removeAllListener = function (type) {
	let handler = this.events.get(type);
	if (!handler) return;
	else this.events.delete(type);
}

let e = new EventEmitter();
e.addListener('type', () => {
	console.log('type事件触发！');
})
e.addListener('type', () => {
	console.log('WOW!type事件又触发！');
})

function f() {
	console.log('type事件我只触发一次');
}

e.once('type', f)
e.emit('type');
e.emit('type');
e.removeAllListener('type');
e.emit('type');

