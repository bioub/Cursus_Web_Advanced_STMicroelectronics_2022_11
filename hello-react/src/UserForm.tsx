import { ChangeEvent, Component } from 'react';
import { User } from './model';

type UserFormProps = {};
type UserFormState = User;

// class UserForm extends Component<UserFormProps, UserFormState> {
//   state: Readonly<UserFormState> = {
//     username: 'romain',
//     isActive: true,
//   }

//   handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ // plutôt updateState ou assignState
//       username: event.target.value
//     });
//   }

//   handleIsActiveChange = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ // plutôt updateState ou assignState
//       isActive: event.target.checked
//     });
//   }

//   render() {
//     const { username, isActive } = this.state;

//     return (
//       <form className="UserForm">
//         <div>
//           Username: <input type="text" value={username} onChange={this.handleUsernameChange} />
//         </div>
//         <div>
//           Active : <input type="checkbox" checked={isActive} onChange={this.handleIsActiveChange} />
//         </div>
//         <div>
//           <button>Register</button>
//         </div>
//       </form>
//     );
//   }
// }

class UserForm extends Component<UserFormProps, UserFormState> {
  state: Readonly<UserFormState> = {
    username: 'romain',
    isActive: true,
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const stateKey = event.target.name;
    const stateValue = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({ // plutôt updateState ou assignState
      [stateKey]: stateValue
    } as any); // eslint-ignore-line
  }

  render() {
    const { username, isActive } = this.state;

    return (
      <form className="UserForm">
        <div>
          Username: <input name="username" type="text" value={username} onChange={this.handleChange} />
        </div>
        <div>
          Active : <input name="isActive" type="checkbox" checked={isActive} onChange={this.handleChange} />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
