import { lte } from 'lodash';
import React from 'react';
import './error-page.css'

export function ErrorPage(props) {

  return (
    <div className="error-page" id="error-page">
      <h1>Not found</h1>
    </div>
  );
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.state.error = error
    console.log('this.state.error', this.state.error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Something went wrong....</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}