
import React, { useState, useEffect } from "react";
import { Button } from "./components/btn/button";
import { Card, CardContent } from "./components/btn/card";

interface User {
  name: string;
  phone: string;
  email: string;
  image:string
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const userInfo = data.results[0];
      const newUser: User = {
        name: `${userInfo.name.first} ${userInfo.name.last}`,
        phone: userInfo.phone,
        email: userInfo.email,
        image: userInfo.picture.large
      };
      setUser(newUser);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="bg-gray-100   flex items-center justify-center min-h-screen">
    <Card className=" bg-white  rounded-lg shadow-lg">
      <CardContent>
      
    
     <div className="p-[]">
      <div className="flex justify-center mb-4">
        <img
          id="user-image"
          src={user.image}
          alt="İstifadəçi Şəkli"
          className="w-32 h-32 rounded-full object-cover"
          />
      </div>
      <h2 id="user-name" className="text-xl font-bold text-center mb-2">
      {user.name}
      </h2>
      <p id="user-email" className="text-gray-600 text-center mb-2">
       {user.email}
      </p>
      <p id="user-phone" className="text-gray-600 text-center">
        {user.phone}
      </p>
       
       
      <div className="mt-4 flex justify-center">
    <Button  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={fetchUser}> Yeni İstifadəçi</Button>
  </div>
          </div> 
      </CardContent>
    </Card>

  </div>
  );
};

export default App;
