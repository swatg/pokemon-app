import React from 'react';
import { AttackProps } from 'types/globalType';

const Attack = ({ data, label }: { data: AttackProps[], label: string }) => {

  const attacks = data.map((attackItem, index) => (
    <tr key={index}>
      <td>{attackItem.name}</td>
      <td>{attackItem.type}</td>
      <td>{attackItem.damage}</td>
    </tr>
  ))
  
  return (
    <>
      <h3>{label}</h3>
      <table>
        <tbody data-testid="attackId">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
          {attacks}
        </tbody>
      </table>
    </>
  );
}

export default Attack;
