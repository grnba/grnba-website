import React from "react";
import grnba from "../../assets/grnba.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <img src={grnba} alt="Image 1" className="w-full h-50" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={require("../../assets/logo.jpg")}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="text-lg leading-relaxed mt-4">
              <h1 className="text-4xl font-bold mb-8">
                {" "}
                Greater Rushmoor Nepali Badminton Association (GRNBA)
              </h1>
              <h1 className="text-xl font-bold mb-8"> Established in 2017 </h1>
              The Greater Rushmoor Nepali Badminton Association (GRNBA) was
              founded in 2017 with the vision of fostering community engagement,
              promoting the sport of badminton, and creating a supportive
              environment for badminton enthusiasts in Rushmoor and beyond.{" "}
              <br />
              <br />
              <h1 className="text-xl font-bold ">Our Aim</h1>GRNBA aims to
              promote well-being, unity, and inclusivity among all badminton
              lovers within the Rushmoor area and across the country. We strive
              to create opportunities for players of all skill levels through:
              <br />
              <br />
              Community Engagement: Bringing together badminton enthusiasts to
              build lasting relationships.
              <br />
              <br /> Competitive Tournaments: Hosting annual members'
              tournaments and open competitions for players from around the
              country.
              <br />
              <br /> Skill Development: Encouraging beginners and supporting
              them in improving their badminton skills through training and
              mentorship programs. <br />
              <br />
              <h1 className="text-xl font-bold">Our Objectives</h1> To achieve
              our mission, we focus on the following key objectives:
              <br /> Supporting Players: We identify and support top players to
              participate in competitions at club, borough, and national levels.
              <br /> <br />
              Official Recognition: We aim to legally register our club and
              organize inter-club tournaments to select and promote the best
              talent.
              <br />
              <br />
              Building Friendships: We work to strengthen friendships among
              players, clubs, and badminton enthusiasts by creating a positive
              and inclusive environment. <br />
              <br />
              Social & Training Events: We organize outdoor social events and
              training sessions to encourage teamwork, fitness, and continuous
              learning. Through dedication and a shared passion for badminton,
              GRNBA continues to be a hub for sportsmanship, development, and
              community spirit within the Nepali and broader Rushmoor
              communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
