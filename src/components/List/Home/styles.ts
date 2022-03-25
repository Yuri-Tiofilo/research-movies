import styled, { keyframes } from 'styled-components'
import Favorite from 'assets/favorito_02.svg'
import FavoriteHover from 'assets/favorito_01.svg'

type PropsButtonFavorite = {
  isActive?: boolean
}

const appearFromY = keyframes`
  from {
    opacity:0;
    transform:translateY(100px);
  }
  to {
    opacity:1;
    transform:translateY(0)
  }
`

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  max-width: 70rem;
  width: 100%;
  margin-top: 10px;
  margin: 0 auto;

  animation: ${appearFromY} 2s;
  z-index: 0;

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

    .stars {
      opacity: 0;
      position: absolute;

      /* bottom: 0px; */
      left: 5px;
    }

    .card {
      .info-box {
        opacity: 0;
        padding: 8px;

        position: relative;
      }
      display: flex;
      transition: transform 500ms;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      &:hover {
        transform: scale(1.125);
        z-index: 1;

        background: #020202;
        padding: 8px 0;
        box-shadow: 0 0 0.5em red;
        .info-box {
          opacity: 1;
          text-align: center;
        }

        .stars {
          opacity: 1;
        }
      }
    }

    > div {
      padding: 8px 0;
    }
    div h3 {
      font-size: 16px;
      color: #fff;
    }
    img {
      height: 260px;
      width: 200px;

      /* position: relative; */
    }
    @media screen and (max-width: 480px) {
      .card {
        .info-box {
          display: flex;
          padding: 8px;
          opacity: 1;
          justify-content: space-between;
          text-align: center;
        }
        .stars {
          opacity: 1;
        }
      }
      img {
        height: 180px;
        width: 150px;
      }
    }
    @media screen and (min-width: 480px) and (max-width: 1023px) {
      .card {
        .info-box {
          display: flex;
          padding: 20px 5px 20px 0px;
          justify-content: space-between;
          text-align: center;
        }
        .stars {
          opacity: 1;
        }
      }

      div h3 {
        font-size: 18px;
        margin-right: 20px;
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
