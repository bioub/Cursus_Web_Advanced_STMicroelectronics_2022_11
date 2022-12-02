// items -> props
// value -> props
// isMenuOpen -> state

import styles from './Select.module.css';
import React, { Component } from 'react';

type SelectProps = {
  items: string[];
};

type SelectState = {
  value: string;
  isMenuOpen: boolean;
};

class Select extends Component<SelectProps, SelectState> {
  state: Readonly<SelectState> = {
    value: this.props.items[0],
    isMenuOpen: false,
  };

  handleControlClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen,
    });
  }

  render() {
    const { items } = this.props;
    const { value, isMenuOpen } = this.state;

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

    const itemsJsx = items.map((el) => <div key={el} className={styles.item}>{el}</div>);

    return (
      <div className="Select">
        <div className={styles.control} onClick={this.handleControlClick}>Selected Value</div>
        {isMenuOpen && <div className={styles.menu}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
