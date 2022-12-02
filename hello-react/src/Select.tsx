// items -> props
// value -> props
// isMenuOpen -> state

import styles from './Select.module.css';
import React, { Component } from 'react';

type SelectProps = {
  items: string[];
  value: string;
  onValueChange(value: string): void;
};

type SelectState = {
  isMenuOpen: boolean;
};

class Select extends Component<SelectProps, SelectState> {
  state: Readonly<SelectState> = {
    isMenuOpen: false,
  };

  handleControlClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen,
    });
  };

  handleItemClick = (value: string) => {
    this.props.onValueChange(value);
  };

  render() {
    const { value, items } = this.props;
    const { isMenuOpen } = this.state;

    // let menuJsx = null;

    // if (this.state.isMenuOpen) {
    //   menuJsx = (
    //     <div className={styles.menu}>
    //       <div className={styles.item}>Item 1</div>
    //       <div className={styles.item}>Item 2</div>
    //       <div className={styles.item}>Item 3</div>
    //     </div>
    //   );
    // }
    // const menuJsx = (this.state.isMenuOpen) ?  (
    //       <div className={styles.menu}>
    //         <div className={styles.item}>Item 1</div>
    //         <div className={styles.item}>Item 2</div>
    //         <div className={styles.item}>Item 3</div>
    //       </div>
    //     ) : null;
    // const menuJsx = isMenuOpen && (
    //   <div className={styles.menu}>
    //     <div className={styles.item}>Item 1</div>
    //     <div className={styles.item}>Item 2</div>
    //     <div className={styles.item}>Item 3</div>
    //   </div>
    // );

    const itemsJsx = items.map((el) => (
      <div key={el} className={styles.item} onClick={() => this.handleItemClick(el)}>
        {el}
      </div>
    ));

    return (
      <div className="Select">
        <div className={styles.control} onClick={this.handleControlClick}>
          {value}
        </div>
        {isMenuOpen && <div className={styles.menu}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
