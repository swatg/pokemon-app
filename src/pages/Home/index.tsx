import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// Style
import Card from 'components/Card';
import Button from 'components/Button';
import Icon from 'components/Icon';
import GET_POKEMON from 'queries/getPokemon';
import { LIMIT } from 'config';
import styles from './style/home.module.css';

function Home(props: { limit: number }) {

  const { limit = LIMIT } = props;
  const [count, setCount] = useState(0);

  const { loading: isLoading, error: isError, data } = useQuery(
    GET_POKEMON,
    {
      variables: {
        fetchLimit: limit,
      },
    },
  );
  const handleNext = () => {
    setCount(count + 1);
  }

  const handleBack = () => {
    setCount(count - 1);
  }

  return (
    <section className="wrapper">
      <div className="wrapperContent">
        <div className={styles.container}>
          {isLoading ? 'Loading content...' :
            (isError ? 'Some error occured...' :
              (data && data.pokemons[count] ?
                <>
                  <Button handler={handleBack} label='back' btnType="icon" disabled={count === 0}>
                    <Icon icon="ArrowLeft" fill="black" size={32} />
                  </Button>
                  <Card key={data.pokemons[count].number} data={data.pokemons[count]} /> 
                  <Button handler={handleNext} label='next' btnType="icon" disabled={data && data.pokemons.length <= count + 1}>
                    <Icon icon="ArrowRight" fill="black" size={32} />
                  </Button>
                </> : ''
              ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
