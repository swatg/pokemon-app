import React from 'react';
import { PokemonProps } from 'types/globalType';
import Attack from 'components/Attack';
import Badge from 'components/Badge';
import styles from './style/card.module.css';

interface CardProps {
  data: PokemonProps,
}

const Card = ({ data }:CardProps) => {

  const weaknesses = data.weaknesses.map((name: string, index: number) => (
    <Badge badgeStyle="weak" label={name} key={index} />
  ))

  const resistant = data.resistant.map((name: string, index: number) => (
    <Badge badgeStyle="resistant" label={name} key={index} />
  ))

  return (
    <div className={styles.detailgrid}>
      <div className={styles.detail}>
        <h1 data-testid='index'>{ data ? data.name : '' }</h1>
        <div className={styles.weakness}>{weaknesses}</div>
        <div className={styles.weakness}>{resistant}</div>
        <Attack data={data.attacks.fast} label="Fast Attack" />
        <Attack data={data.attacks.special} label="Special Attack" />
      </div>
      <div className={styles.image}>
        <img src={data ? data.image : ''} alt="pokemon" width="400" height="450" />
      </div>
    </div>
  );
}


export default Card;
