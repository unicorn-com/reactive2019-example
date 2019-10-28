
const Button = createReactClass({

  propTypes: {
    text: PropTypes.string
  },
  getDefaultProps() {
    return {
      text: "Haf haf"
    };
  },
  getInitialState() {
    return {
      text: this._expensiveCalculation(this.props.text)
    };
  },

  componentWillReceiveProps(nextProps) {
    this.props.text !== nextProps.text && this.setState({
      text: this._expensiveCalculation(nextProps.text)
    });
  },

  _expensiveCalculation(text) {
    //...
    return newText;
  },

  _handleClick(e) {
    console.log(e, this.props);
  },

  render() {
    return (
      <button onClick={this._handleClick}>
        {this.state.text}
      </button>
    );
  }
});



function Button(props) {

  const text = useMemo(() => {
    return expensiveCalculation(props.text)
  }, [props.text]);

  function expensiveCalculation(text) {
  ...
    return newText;
  }

  function handleClick(e) {
    console.log(e, props);
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
});

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Haf haf"
};


class Button extends React.Component {
    static propTypes = {
      text: PropTypes.string
    }
    static defaultProps = {
        text: "Haf haf"
    }
    constructor(props) {
      super(props);
      this.state = {
        text: this._expensiveCalculation(props.text)
      };
      this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.props.text !== nextProps.text && this.setState({
        text: this._expensiveCalculation(nextProps.text)
      });
    }

    _expensiveCalculation(text) {
      //...
      return newText;
    },

    _handleClick(e) {
      console.log(e, this.props);
    }

    render() {
      return (
        <button onClick={this._handleClick}>
          {this.state.text}
        </button>
      );
    }
  });


function Contact(props) {
  let [name, setName] = useState("John Doe");

  //event handler
  const _rename = () => {
    setName("Jane Doe");
  }

  return (
    <div>
      Name: {name} <br/>
      Email: {email} <br/>
      <button onClick={() => _rename()}/>>
    </div>
  )
}
