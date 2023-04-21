import styled from 'styled-components'

interface IProfileImage {
  url: string
}

export const ProfileContainer = styled.div<IProfileImage>`
  width: 100%;
  margin-top: 80px;
  color: #ffffff;
  background-color: #180a33;

  > .wrapper {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;

    > .interactionWrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10px;

      .profileImage {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #8b40f4;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #8b40f4;
          opacity: 0.5;
          border-radius: 50%;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          margin: 5px;
          background-image: url(${(props: IProfileImage) => props.url});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
        }
      }

      button {
        width: 120px;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        border: 1px solid #8b40f4;
        background-color: transparent;
        color: #8b40f4;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        white-space: nowrap;
      }
    }

    > .profileTextWrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      .section_1 {
        font-weight: 600;
        font-size: 21px;
        margin-bottom: 6px;
      }

      .section_2 {
        margin-bottom: 10px;
        font-size: 12px;
      }

      .section_3 {
        width: 100%;
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .medals {
          display: flex;
          gap: 4px;
          > img {
            width: 25px;
            height: 25px;
          }
        }
      }

      .section_4 {
        width: 100%;
        margin-bottom: 14px;
        font-size: 12px;
        white-space: pre-wrap;
        font-family: 'Montserrat';
      }

      .section_5 {
        margin-bottom: 14px;
        display: flex;
        font-size: 14px;
        gap: 10px;
      }

      .section_6 {
        margin-bottom: 36px;
        display: flex;
        font-size: 14px;
        gap: 10px;
        span {
          font-weight: 600;
        }
      }
    }
  }
`

export const Taps = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid #ffffff;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`

interface ITap {
  active: boolean
}
export const Tap = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: ${(props: ITap) => (props.active ? '5px solid #ffffff' : 'none')};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props: ITap) => (props.active ? '600' : '400')};
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`

interface IBackgroundImage {
  url: string
}

export const BackgroundImage = styled.div<IBackgroundImage>`
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-image: url(${(props: IBackgroundImage) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-top: 24px;
  margin-bottom: 24px;
  gap: 10px;
  
  .inputWrap {
    border: 1px solid #626262;
    border-radius: 8px;
    color: #ffffff;
    padding: 12px 27px;
  }

  .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    text-align: left;
    gap: 1rem;

    input,
    select,
    option,
    button {
      background-color: transparent;
      border: none;
      color: #ffffff;
    }

    input {
      flex: 1;
    }
  }

  .nftInput {
    display: flex;
    gap: 10px;

    .inputWrap {
      flex: 1;
    }

    button {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #4f4f4f;
      border-radius: 8px;
    }
    
  }
  .nftContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    margin-top: 14px;
  }
`

interface INFTWrap {
  url: string
}
export const NFTWrap = styled.div<INFTWrap>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c4c4c4;
  border: 1px solid #4f4f4f;

  .bg {
    width: 100%;
    height: 148px;
    background-image: url(${(props: INFTWrap) => props.url});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    border: 1px solid #4f4f4f;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 6px 13px;

    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      &:first-child {
        font-weight: 600;
      }
    }
  }
`
export const OptsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%
`
export const LiOpt = styled.li`
  list-style-type:none;
  height:50%;
  display: flex;
  justify-items: center;
  align-items: center;
`
