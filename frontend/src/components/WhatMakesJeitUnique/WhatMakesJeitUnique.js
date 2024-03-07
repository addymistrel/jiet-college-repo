import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import "./WhatMakesJeitUnique.css";
const WhatMakesJeitUnique = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[75vh] bg-bg-1">
      <div className="flex justify-center items-center p-10 w-[100%]">
        <div className="flex justify-center items-center w-[40%] text-[50px] text-center text-white">
          WHAT MAKES JIET UNIQUE
        </div>
        <div className="flex w-[60%] gap-14 text-center">
          <div className="flex flex-col  w-[33%]">
            <div className="text-[62px] font-bold text-white">900+</div>
            <div className="text-[18px] text-white font-bold">
              Companies for Placement
            </div>
          </div>
          <div className="flex flex-col  w-[40%]">
            <div className="text-[62px] font-bold text-white">4000+</div>
            <div className="text-[18px] text-white font-bold">Students</div>
          </div>
          <div className="flex flex-col  w-[30%]">
            <div className="text-[62px] font-bold text-white">10+</div>
            <div className="text-[18px] text-white font-bold">Programs</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between item-center w-[100%] p-4">
        <div className="w-[22%] m-4 h-[100%]">
        <Card style={{
            minHeight:'250px',
        }}>
          <CardBody style={{
            padding:'0px',
            margin:'0px',
          }}>
            <div className="card">
                <img src="assets/images/jiet6.png" alt="image"/>
            </div>
            <div className="card-content">
            <div>MACHINE DESIGNING</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae assumenda numquam laudantium.</div>
            </div>
          </CardBody>
        </Card>
        </div>

        <div className="w-[22%] m-4">
        <Card style={{
            minHeight:'250px'
        }}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        </div>

        <div className="w-[22%] m-4">
        <Card style={{
            minHeight:'250px'
        }}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        </div>

        <div className="w-[22%] m-4">
        <Card style={{
            minHeight:'250px'
        }}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesJeitUnique;
