import { Component } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import ServerError from "./components/ServerError";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ServerError />;
    }

    return <>
    <Navbar />
      <p className="text-2xl text-center" style={{marginTop: '20%', color: '#CDB4DB'}}>No Error</p>
      {this.props.children}
    </>;
  }
}