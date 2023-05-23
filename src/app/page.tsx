import React from "react";
import Form from "@/components/form/Form";
import Navigation from "@/components/nav/Navigation";
import UserCard from "@/components/icons/UserCard";
import ItemContainer from "@/components/nav/ItemContainer";


const Home : React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-100 w-full ">
            <div className={'flex flex-wrap text-black container w-[90%] py-16 gap-4 mx-auto '}>
              <ItemContainer>
                  <Form/>
              </ItemContainer>
              <ItemContainer>
                  <Navigation/>
              </ItemContainer>
                <ItemContainer>
                    <UserCard/>
                </ItemContainer>
            </div>
        </main>
    )
};

export default Home;