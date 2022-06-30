import { Avatar } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { AxiosAuth } from "../../AxiosIns/AxiosAuth";

function UserProfileCard() {
  const [connections, setConnections] = useState();
  console.log(connections, "connection----s");




  useEffect(() => {
    AxiosAuth.get("connections").then((res) => {
      setConnections(res.data);
      console.log(res.data, "==========f==ffrr=======");

    });
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        {connections &&
          connections.map((con) => {
            return (
              <>
                <Col sm={4} className="mt-5">
                  <Card style={{ alignItems: "center", }}>
                    <div className="userprofilecard-header">
                      <div className="userprofilecard-header-avatar">
                        <Avatar
                          style={{
                            width: "100px",
                            height: "100px",
                           
                          }}
                          alt={con.fullname}
                          src={con.avatar}
                          sx={{ width: 100, height: 100 }}
                        />
                      </div>
                      <div className="userprofilecard-header-name">
                        <h5>{con.fullname}</h5>
                        <p>
                          <small>{con.profession}</small>
                        </p>
                      </div>
                      <div>
                        <small>
                         
                          <Button variant="primary">Follow</Button>
                        </small>
                      </div>
                    </div>
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>
    </Container>
  );
}

export default UserProfileCard;
