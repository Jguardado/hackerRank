class Comp extends Component {
  constructor() {
    super()

    this.state = {
      mounted: false
    }

    this._subrender = this._subrender.bind(this)
  }
  compoentDidMOunt() {
    this.setState({
      mounted: true
    })
  }

  _subrender() {
    return (
      <div>
        <AutoSave  {...props}/>
      </div>
    )
  }

  render() {
    const { mounted } = this.state
    return (
      <div>
        { mounted ? this._subrender() : null}
      </div>
    )
  }
}
