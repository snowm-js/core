
class WindowManager {
	start = () => {
		
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', this.after_loaded)
		} else {
			this.after_loaded()
		}
		
		return
		
	}
	after_loaded = () => {
		
		document.body.innerHTML = ''
		
		const elem_root = document.createElement('div')
		
		document.body.appendChild(elem_root)
		
		elem_root.innerHTML = 'WindowManager started.'
		
		return
	
	}
}

export { WindowManager }

