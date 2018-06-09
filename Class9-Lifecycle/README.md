# Life Cycle Methods

Each Class Component goes through a component life cycle with multiple phases. There are several life cycle methods that can be overridden to run code at different parts of the life cycle.

## Mounting Phase Methods

The mounting phase begins when an instance of a component is created and rendered into the DOM. The following lifecycle methods occur in the order they are listed:

  - constructor(props) - called when the component is first initialized. This     method is only called once.
  - componentWillMount() - called when a component is about to mount.
  - render() - called when a component is rendered.
  - componentDidMount() - called when a component has finished mounting. This is where network requests are usually made.

## Unmounting Phase Methods

The unmounting phase begins when a component is being removed from the DOM. The following life cycle method occurs during the unmounting phase:

  - componentWillUnmount() - called immediately before a component unmounts. This is where any cleanups are made such as cancelling timers or network requests.

## Updating Phase Methods

The updating phase begins when a component's properties or state changes. The following lifecycle methods occur in the order they are listed:

  - componentWillReceiveProps(nextProps) - called when a component has updated and is receiving new props.
  - shouldComponentUpdate(nextProps, nextState) - called after receiving props and is about to update. If this method returns false, componentWillUpdate(), render(), and componentDidUpdate() will not execute.
  - componentWillUpdate(nextProps, nextState) - called when a component is about to be updated.
  - render() - called when a component is rerendered.
  - componentDidUpdate(prevProps, prevState) - called when a component has finished updating.


#### Source

See [EDX](https://edx.com/)
