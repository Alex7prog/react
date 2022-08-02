import React from 'react';

// export const withDataLoader = selectData => async WrappedComponent => {
//   const data = await fetch(selectData).then(response => response.json());
//   console.log('data: ', data);

//   return WrappedComponent => <WrappedComponent data={data} />;
// };

export const withDataLoader = selectData => WrappedComponent => {
  return fetch(selectData)
    .then(response => response.json())
    .then(data => <WrappedComponent data={data} />);
};
// const getUser = async userName => {
//   const response = await fetch(`https://api.github.com/users/${userName}`);
//   console.log(response);
// };

// const fetchUser = url => {
//   fetch(url)
//     .then(response => response.json())
//     .then(userData => {
//       return userData;
//     });
// };
// state = {
//   userData: null,
// };

// componentDidMount() {
//   this.fetchUser(this.props.userId);
// }

// fetchUser = userId => {
//   fetch(`https://api.github.com/users/${userId}`)
//     .then(response => response.json())
//     .then(userData => {
//       this.setState({
//         userData,
//       });
//     });
// };

// export function withDataLoader(selectData) {
//   // ...и возвращает другой компонент...
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         data: selectData(DataSource, props),
//       };
//     }

//     componentDidMount() {
//       // ...который подписывается на оповещения...
//       DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount() {
//       DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange() {
//       this.setState({
//         data: selectData(DataSource, this.props),
//       });
//     }

//     render() {
//       console.log(selectData);
//       console.log(WrappedComponent);
//       // ... и рендерит оборачиваемый компонент со свежими данными!
//       // Обратите внимание, что мы передаём остальные пропсы
//       return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// }
