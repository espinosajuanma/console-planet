export default class Console {
    constructor(output, input, submit) {
        this.prompt = '<span class="cyan">espinosa</span>@<span class="pink">juanma</span><span class="cyan">~</span>$&nbsp;'
        this.history = ''
        this.input = document.getElementById(input)
        this.output = document.getElementById(output)
        this.submit = document.getElementById(submit)
    }

    listen() {
        document.addEventListener('click', () => {
            this.input.focus()
        })
        this.input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.send(this.input.value)
            }
        })
    }

    send(query) {
        this.history += `<p>${this.prompt}${query}</p>`
        query = query.split(' ')

        // send command
        this.parseCommand(query[0], query.slice(1))

        // clear input
        this.input.value = ''
    }

    cursor(frame) {
        return ( Math.floor(frame / 30) % 2 == 0 ? '<span style="font-size: 1.5rem;">█</span>' : '')
    }

    update(frame) {
        this.output.innerHTML = this.history + '<p>' + this.prompt + this.input.value.replaceAll(' ', '&nbsp;') + this.cursor(frame) + '</p>'
    }

    parseCommand(cmd, arg) {
        cmd = cmd.toLowerCase()
        if (cmd == 'echo' && arg.length > 0 )  return this.history += '<p>' + arg.join(' ') + '</p>'
        if (cmd == 'clear') return this.history = ''
        if (cmd == 'ig' || cmd == 'instagram') return this.history += '<p><a href="https://www.instagram.com/espinosajuanma">@espinosajuanma</a></p>'
        return ''
    }
}