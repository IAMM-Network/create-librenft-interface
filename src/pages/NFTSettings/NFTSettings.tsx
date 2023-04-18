import { useState } from "react";
import { Flex, Grid } from "../../components/Box";
import { Container } from "../../components/Layout";
import {
  ThreeDotsVerticalIcon,
  HeartIcon,
  TransferIcon,
  IAMMIcon,
  CircleAddIcon,
  FractionalIcon,
  RentableIcon,
  LockIcon,
  OpenEyeIcon,
} from "../../components/Svg";
import Menu from "../Profile/components/Menu";
import { randomIntFromInterval } from "../SocialFeed/data/types";

import {
  InputBox,
  Like,
  LikeCount,
  NFTTitle,
  NFTSettingsTitle,
  NFTSettingsTitleButton,
  OptionRow,
  OptionText,
  OptionTitle,
  Text,
  PrimaryButton,
  Divider,
  Emphasis,
  TextBox,
  OptionInput,
} from "./styles";

const TempImage = require("../../assets/images/congrats-img.png");

const NFTSettings = () => {
  const [fractionalCount, setFractionalCount] = useState(1);
  const [fileCount, setFileCount] = useState(1);
  const [linkCount, setLinkCount] = useState(1);
  const [rentableTo, setRentableTo] = useState(false);
  const [rentableFrom, setRentableFrom] = useState(false);
  const [rentableFromValue, setRentableFromValue] = useState(new Date());
  const [rentableToValue, setRentableToValue] = useState(new Date());

  return (
    <>
      <Container>
        <Flex
          flexDirection="column"
          alignContent="center"
          paddingTop="104px"
          paddingBottom="100px"
        >
          <Flex
            marginBottom="40px"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <NFTSettingsTitle>LNFT Settings</NFTSettingsTitle>
            <NFTSettingsTitleButton>
              <ThreeDotsVerticalIcon
                fill="transparent"
                width="20px"
                height="20px"
              />
            </NFTSettingsTitleButton>
          </Flex>

          <Flex
            marginBottom="20px"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <NFTTitle>libre NFT #{randomIntFromInterval(0, 10000)}</NFTTitle>
            <Like>
              <HeartIcon fill="transparent" width="14px" height="14px" />
              <LikeCount>{randomIntFromInterval(50, 100)}</LikeCount>
            </Like>
          </Flex>

          <img src={TempImage} alt="nft-asset" />

          <Flex
            margin="20px"
            flexDirection="row"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
            <Text weight={400} size="14px" style={{ marginRight: "5px" }}>
              owned by
            </Text>
            <Text weight={700} size="14px">
              {"God woken"}
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Flex width={"100%"} alignItems={"flex-start"}>
              <Flex marginRight={15}>
                <TransferIcon width={13} height={13} />
              </Flex>
              <Flex flexDirection={"column"} width={"100%"}>
                <OptionTitle style={{ marginBottom: "15px" }}>
                  Transfer to
                </OptionTitle>
                <Flex flexDirection="column">
                  <OptionRow>
                    <OptionText>Input recipient wallet address:</OptionText>
                  </OptionRow>
                </Flex>
              </Flex>
            </Flex>
            <Flex marginTop={10}>
              <InputBox placeholder="0x..." />
            </Flex>
            <Flex justifyContent={"center"} marginTop={20}>
              <PrimaryButton>Transfer</PrimaryButton>
            </Flex>
          </Flex>

          <Flex marginTop={20} flexDirection={"column"}>
            {Array(fractionalCount)
              .fill(null)
              .map((_, i) => (
                <Flex width={"100%"} marginTop={20} alignItems={"flex-start"}>
                  <Flex marginRight={15}>
                    <FractionalIcon width={13} height={13} fill="#8B40F4" />
                  </Flex>
                  <Flex flexDirection={"column"} width={"100%"}>
                    <OptionTitle style={{ marginBottom: "15px" }}>
                      Fractional
                    </OptionTitle>
                    <Flex flexDirection="column">
                      <OptionRow>
                        <OptionText>Fractions available:</OptionText>
                        <OptionText>10</OptionText>
                      </OptionRow>
                      <OptionRow>
                        <OptionText>Fractions set:</OptionText>
                        <OptionText>0</OptionText>
                      </OptionRow>
                      <OptionRow>
                        <OptionText>Default price p/fraction:</OptionText>
                        <OptionText>100</OptionText>
                      </OptionRow>
                      <Divider style={{ marginLeft: "-20px" }} />
                      <OptionRow>
                        <OptionText>Set fraction 1:</OptionText>
                      </OptionRow>
                      <OptionRow>
                        <OptionText>Input wallet address</OptionText>
                      </OptionRow>
                      <Flex style={{ marginLeft: "-20px" }} marginTop={10}>
                        <InputBox placeholder="0x..." />
                      </Flex>
                      <OptionRow marginTop={10}>
                        <OptionText>Set % fraction for this address</OptionText>
                        <Flex
                          alignItems={"center"}
                          style={{ width: "80px", position: "relative" }}
                        >
                          <InputBox
                            style={{ textAlign: "right", paddingRight: "25px" }}
                          />
                          <OptionText
                            style={{
                              position: "absolute",
                              right: "10px",
                              marginBottom: "0",
                            }}
                          >
                            %
                          </OptionText>
                        </Flex>
                      </OptionRow>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </Flex>

          <Flex justifyContent={"center"} marginTop={20}>
            <PrimaryButton>Confirm</PrimaryButton>
          </Flex>

          <div
            style={{ cursor: "pointer", marginTop: "20px" }}
            onClick={() => setFractionalCount((prev) => prev + 1)}
          >
            <CircleAddIcon width={24} height={24} />
          </div>

          <Flex marginTop={40} flexDirection={"column"}>
            <Flex width={"100%"} alignItems={"flex-start"}>
              <Flex marginRight={15}>
                <RentableIcon width={13} height={13} fill="#8B40F4" />
              </Flex>
              <Flex flexDirection={"column"} width={"100%"}>
                <OptionTitle style={{ marginBottom: "15px" }}>
                  Rentable
                </OptionTitle>
                <Flex flexDirection="column">
                  <OptionRow>
                    <OptionText>
                      Input wallet address to whom you'll rent
                    </OptionText>
                  </OptionRow>
                  <Flex style={{ marginLeft: "-20px" }} marginTop={10}>
                    <InputBox placeholder="0x..." />
                  </Flex>
                  <Divider
                    style={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
                  />
                  <OptionRow marginBottom={10}>
                    <OptionText>
                      Set rental duration (Time is set to UTC time)
                    </OptionText>
                  </OptionRow>
                  <Flex>
                    <OptionText
                      style={{
                        fontWeight: 600,
                        textAlign: "center",
                        marginRight: 30,
                      }}
                    >
                      From
                    </OptionText>
                    {rentableFrom ? (
                      <>
                        <OptionInput
                          onChange={(e) =>
                            setRentableFromValue(new Date(e.target.value))
                          }
                          type="datetime-local"
                        />
                        <OptionText
                          style={{
                            marginRight: 30,
                            marginLeft: 10,
                            fontWeight: 600,
                          }}
                          onClick={() => setRentableFrom(false)}
                        >
                          Confirm
                        </OptionText>
                      </>
                    ) : (
                      <>
                        <OptionText
                          onClick={() => setRentableFrom(true)}
                          style={{ marginRight: 30 }}
                        >
                          {rentableFromValue.toDateString()}
                        </OptionText>
                        <OptionText>
                          {rentableFromValue.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </OptionText>
                      </>
                    )}
                  </Flex>
                  <Flex>
                    <OptionText
                      style={{
                        fontWeight: 600,
                        textAlign: "center",
                        marginLeft: 5,
                        marginRight: 44,
                      }}
                    >
                      To
                    </OptionText>
                    {rentableTo ? (
                      <>
                        <OptionInput
                          onChange={(e) =>
                            setRentableToValue(new Date(e.target.value))
                          }
                          type="datetime-local"
                        />
                        <OptionText
                          style={{
                            marginRight: 30,
                            marginLeft: 10,
                            fontWeight: 600,
                          }}
                          onClick={() => setRentableTo(false)}
                        >
                          Confirm
                        </OptionText>
                      </>
                    ) : (
                      <>
                        <OptionText
                          onClick={() => setRentableTo(true)}
                          style={{ marginRight: 30 }}
                        >
                          {rentableToValue.toDateString()}
                        </OptionText>
                        <OptionText>
                          {rentableToValue.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </OptionText>
                      </>
                    )}
                  </Flex>
                  <Divider
                    style={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
                  />
                  <OptionRow>
                    <OptionText>Set rental price</OptionText>
                    <Flex
                      alignItems={"center"}
                      style={{ width: "122px", position: "relative" }}
                    >
                      <InputBox
                        style={{ textAlign: "right", paddingRight: "50px" }}
                      />
                      <IAMMIcon
                        width={13}
                        height={13}
                        style={{ position: "absolute", right: "20px" }}
                      />
                    </Flex>
                  </OptionRow>
                  <OptionRow marginTop={20}>
                    <div></div>
                    <Flex
                      alignItems={"center"}
                      style={{ position: "relative" }}
                    >
                      <OptionText style={{ marginRight: "60px" }}>
                        Daily: 10
                      </OptionText>
                      <IAMMIcon
                        width={13}
                        height={13}
                        style={{ position: "absolute", right: "20px" }}
                      />
                    </Flex>
                  </OptionRow>
                  <OptionRow marginTop={10}>
                    <div></div>
                    <Flex
                      alignItems={"center"}
                      style={{ position: "relative" }}
                    >
                      <OptionText style={{ marginRight: "60px" }}>
                        Hourly: 0.416
                      </OptionText>
                      <IAMMIcon
                        width={13}
                        height={13}
                        style={{ position: "absolute", right: "20px" }}
                      />
                    </Flex>
                  </OptionRow>
                  <Divider
                    style={{ marginLeft: "-20px", width: "calc(100% + 20px)" }}
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} marginTop={20}>
              <PrimaryButton>Rent</PrimaryButton>
            </Flex>
          </Flex>

          <Flex marginTop={40} flexDirection={"column"}>
            <Flex width={"100%"} alignItems={"flex-start"}>
              <Flex marginRight={15}>
                <LockIcon width={13} height={13} fill="#8B40F4" />
              </Flex>
              <Flex flexDirection={"column"} width={"100%"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  style={{ marginBottom: "15px" }}
                >
                  <OptionTitle style={{ width: "inherit" }}>
                    Unlockable Content
                  </OptionTitle>
                  <OptionText
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "flex-end",
                    }}
                  >
                    This NFT <Emphasis>is not</Emphasis> rentable
                  </OptionText>
                </Flex>
                <Flex flexDirection="column">
                  <OptionRow>
                    <OptionText>Add exclusive content.</OptionText>
                  </OptionRow>
                </Flex>
                <OptionText style={{ marginTop: "10px" }}>Files:</OptionText>
                <Flex
                  flexDirection={"column"}
                  style={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
                >
                  {Array(fileCount)
                    .fill(null)
                    .map((_, i) => (
                      <Flex
                        key={i}
                        marginTop={10}
                        style={{ position: "relative" }}
                      >
                        <InputBox
                          placeholder="Upload file..."
                          style={{
                            caretColor: "transparent",
                            paddingLeft: "20px",
                          }}
                        />
                        <InputBox
                          type="file"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            width: "100%",
                          }}
                        />
                      </Flex>
                    ))}

                  <div
                    style={{ cursor: "pointer", marginTop: "20px" }}
                    onClick={() => setFileCount((prev) => prev + 1)}
                  >
                    <CircleAddIcon width={24} height={24} />
                  </div>
                </Flex>

                <OptionText style={{ marginTop: "30px" }}>Links:</OptionText>
                <Flex
                  flexDirection={"column"}
                  style={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
                >
                  {Array(linkCount)
                    .fill(null)
                    .map((_, i) => (
                      <Flex key={i} marginTop={10}>
                        <InputBox
                          placeholder="https://"
                          style={{ paddingLeft: "20px" }}
                        />
                      </Flex>
                    ))}

                  <div
                    style={{ cursor: "pointer", marginTop: "20px" }}
                    onClick={() => setLinkCount((prev) => prev + 1)}
                  >
                    <CircleAddIcon width={24} height={24} />
                  </div>
                </Flex>

                <OptionText style={{ marginTop: "30px" }}>
                  Set rules (if any):
                </OptionText>
                <OptionText style={{ marginTop: "10px" }}>
                  Set custom conditions as text for your holders
                </OptionText>

                <Flex
                  flexDirection={"column"}
                  style={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
                >
                  <Flex marginTop={10}>
                    <TextBox placeholder="Lorem ipsum..." />
                  </Flex>

                  <OptionText
                    style={{ marginTop: "10px", textAlign: "center" }}
                  >
                    500 characters max.
                  </OptionText>
                </Flex>

                <OptionText style={{ marginTop: "30px", marginBottom: "10px" }}>
                  Set holding time
                </OptionText>
                <Flex
                  flexDirection={"column"}
                  style={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
                >
                  <Flex alignItems={"center"}>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                      <OptionText>Days</OptionText>
                      <InputBox
                        placeholder="000"
                        style={{ textAlign: "center" }}
                      />
                    </Flex>
                    <Flex style={{ marginInline: "5px", marginTop: "20px" }}>
                      <OptionText>/</OptionText>
                    </Flex>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                      <OptionText>Hours</OptionText>
                      <InputBox
                        placeholder="00"
                        style={{ textAlign: "center" }}
                      />
                    </Flex>
                    <Flex style={{ marginInline: "5px", marginTop: "20px" }}>
                      <OptionText>:</OptionText>
                    </Flex>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                      <OptionText>Minutes</OptionText>
                      <InputBox
                        placeholder="00"
                        style={{ textAlign: "center" }}
                      />
                    </Flex>
                    <Flex style={{ marginInline: "5px", marginTop: "20px" }}>
                      <OptionText>:</OptionText>
                    </Flex>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                      <OptionText>Seconds</OptionText>
                      <InputBox
                        placeholder="00"
                        style={{ textAlign: "center" }}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} marginTop={30}>
              <PrimaryButton>Confirm</PrimaryButton>
            </Flex>
          </Flex>

          <Flex marginTop={40} flexDirection={"column"}>
            <Flex width={"100%"} alignItems={"flex-start"}>
              <Flex marginRight={15}>
                <OpenEyeIcon width={13} height={13} fill="#8B40F4" />
              </Flex>
              <Flex flexDirection={"column"} width={"100%"}>
                <Flex justifyContent={"space-between"}>
                  <OptionTitle
                    style={{ marginBottom: "15px", width: "inherit" }}
                  >
                    Whitelist
                  </OptionTitle>
                </Flex>
                <Flex flexDirection="column">
                  <OptionRow>
                    <OptionText>Upload csv file</OptionText>
                  </OptionRow>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  style={{ width: "calc(100% + 20px)", marginLeft: "-20px" }}
                >
                  <Flex marginTop={10} style={{ position: "relative" }}>
                    <InputBox
                      placeholder="Upload file..."
                      style={{ caretColor: "transparent", paddingLeft: "20px" }}
                    />
                    <InputBox
                      type="file"
                      style={{
                        opacity: 0,
                        position: "absolute",
                        width: "100%",
                      }}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} marginTop={30}>
              <PrimaryButton>Confirm</PrimaryButton>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Menu />
    </>
  );
};

export default NFTSettings;
