import styled from 'styled-components'
import Favorite from 'assets/favorito_02.svg'
import FavoriteHover from 'assets/favorito_01.svg'

type PropsButtonFavorite = {
  isActive?: boolean
}

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  max-width: 70rem;
  width: 100%;
  margin-top: 10px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    padding: 10px;
    /* max-width: 70rem; */
  }
  @media screen and (min-width: 480px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    max-width: 70rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: transform 500ms;
    /* padding: 20px; */
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }
    > div {
      display: none;
    }
    div h3 {
      font-size: 16px;
      color: #fff;
      /* font-weight: bold; */
    }
    img {
      height: 260px;
      width: 200px;
    }
    @media screen and (max-width: 480px) {
      > div {
        display: flex;
        padding: 8px;
        justify-content: space-between;
      }
      img {
        height: 180px;
        width: 150px;
      }
    }
    @media screen and (min-width: 480px) and (max-width: 1023px) {
      > div {
        display: flex;
        padding: 20px 5px 20px 0px;
        justify-content: space-between;
      }
      div h3 {
        font-size: 18px;
        /* font-weight: bold; */
        margin-right: 20px;
      }
    }

    &:hover {
      transform: scale(1.3);
      z-index: 1;

      background: #020202;
      padding: 5px 0;
      box-shadow: 0 0 0.5em red;

      > div {
        display: flex;

        padding: 8px 0;
        text-align: center;
      }
    }
  }
`

export const ButtonFavorite = styled.button<PropsButtonFavorite>`
  border: 0;
  background: ${({ isActive }) =>
    isActive
      ? `url(${FavoriteHover}) no-repeat center`
      : `url(${Favorite}) no-repeat center`};
  width: 30px;
  height: 30px;
  margin-right: 20px;
  z-index: 999999;
  transition: background 0.5s;
  :hover {
    background: url(${FavoriteHover}) no-repeat center;
  }
`
