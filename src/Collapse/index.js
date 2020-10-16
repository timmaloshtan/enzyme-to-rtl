import React from "react";
import CollapseText from "./CollapseText";

class Collapse extends React.Component {
  state = { openIndex: 0 };
  setOpenIndex = (openIndex) => this.setState({ openIndex });
  render() {
    const { openIndex } = this.state;
    return (
      <div className="collapse">
        {this.props.items.map((item, index) => (
          <div className="collapse__item" key={String(index)}>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {index === openIndex ? (
              <CollapseText>{item.contents}</CollapseText>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
export default Collapse;
