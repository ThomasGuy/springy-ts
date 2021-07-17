/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */

// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import { Col, Grid, Row } from '../components/styles/responsive-layout';

const Home: React.FC = () => {
  function modifyValue1() {
    const inp1 = document.getElementById('input1')! as HTMLInputElement;
    inp1.value === 'One' ? (inp1.value = 'Ahoy') : (inp1.value = 'One');
    // console.log('row2');
  }
  function modifyValue2() {
    const inp2 = document.getElementById('input2') as HTMLInputElement;
    inp2.value === 'Two' ? (inp2.value = 'There') : (inp2.value = 'Two');
    // console.log('col1');
  }
  function modifyValue3() {
    const inp3 = document.getElementById('input3') as HTMLInputElement;
    inp3.value === 'Three' ? (inp3.value = 'Captain') : (inp3.value = 'Three');
    // console.log('input1');
  }
  function modify() {
    return console.log('Modified..');
  }
  function onChangeHandler() {}

  useEffect(() => {
    const row1 = document.getElementById('row2')!;
    const row2 = document.getElementById('col1')!;
    const row3 = document.getElementById('input1')!;

    row1.addEventListener('click', modifyValue1, false);
    row2.addEventListener('click', modifyValue2, false);
    row3.addEventListener('click', modifyValue3, false);

    return () => {
      row1.removeEventListener('click', modifyValue1);
      row2.removeEventListener('click', modifyValue2);
      row3.removeEventListener('click', modifyValue3);
      // console.log('deactivated');
    };
  }, []);

  return (
    <Grid>
      <Row>
        <Nav title="React Spring" />
      </Row>
      <Row id="row1">
        <h1 className="center">Home</h1>
      </Row>
      <Row id="row2" cols={3} onClick={modify}>
        <Col id="col1" onClick={modify}>
          <input
            type="text"
            id="input1"
            value="One"
            onClick={modify}
            onChange={onChangeHandler}
          />
        </Col>
        <Col id="col2" span={1} height="5rem">
          <input type="text" id="input2" value="Two" onChange={onChangeHandler} />
        </Col>
        <Col id="col3">
          <input type="text" id="input3" value="Three" onChange={onChangeHandler} />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;

// <Row>
//   <Col>I will expand to fill</Col>
//   <Col size={2} collapse="xs" hidden="md">
//     I will disappear
//   </Col>
//   <Col height={'7rem'}>Here to fill up the gaps</Col>
// </Row>
