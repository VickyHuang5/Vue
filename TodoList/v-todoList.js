new Vue({
	el: '#app',
	data: {
		items: [
		  'I have a pen',
		  'I have an apple',
		  'ahh apple-pen'
		],
		message: '',
	},
	methods: {
		toggle() {
		  this.items.push(this.message);
		  this.message='';
		},
		remove(index){
			this.items.splice(index, 1);
		}
	}
});