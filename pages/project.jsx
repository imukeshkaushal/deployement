import React from "react";
import Link from "next/Link";
import { Flex, Spacer } from "@chakra-ui/react";
const Project = ({ repo }) => {
  let result = repo.items;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        width: "60%",
        margin: "auto",
        gap: "20px",
        marginTop : "20px"
      }}
    >
      {result.map((el) => {
        return (
          <div style={{ border: "1px solid black", padding: "20px", borderRadius : "15px" }} key = {el.id}>
            <Link href = {el.html_url}><p style={{fontWeight : "bold"}}>Project Name : {el.name}</p>
            <p>{el.description}</p>
            <Flex>
            <p>Star : {el.stargazers_count}</p>
            <Spacer/>
            <p>Fork : {el.forks_count}</p>
            
            </Flex>
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:imukeshkaushal+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  return {
    props: {
      repo: data,
    },
  };
}
export default Project;
