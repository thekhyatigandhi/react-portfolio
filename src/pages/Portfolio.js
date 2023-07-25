//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import HouseHunter from "../assets/HouseHunter.png";
import TextEditor from "../assets/TextEditor.png";
import WeatherApp from "../assets/WeatherApp.png";
import WebApiQuiz from "../assets/WebApiQuiz.png";
import WorkDayScheduler from "../assets/WorkDayScheduler.png";
import passwordGenerator from "../assets/passwordGenerator.png";

//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={HouseHunter}
            class="card-img-top"
            alt="House-Hunter-Website"
          />
          <div className="card-body">
            <h5 className="card-title">House Hunter App</h5>
            <p className="card-text">
              House Hunter is a web application where you can search for
              properties, upload your property for sale or rent and it is built
              with Node.js and Express.js that serves as a RESTful API for
              searching and listing real estate properties.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://github.com/leandromangubat/Real-Estate"
                className="btn btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://immense-woodland-75023-12b9f87d1bf1.herokuapp.com/"
                className="btn btn-primary"
              >
                Website
              </a>
            </div>
            <div className="HouseHunter"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={TextEditor}
            class="card-img-top"
            alt="Text-Editor-Website"
          />
          <div className="card-body">
            <h5 className="card-title">Text Editor</h5>
            <p className="card-text">
              The web text editor application empowers users to create notes or
              code snippets seamlessly, regardless of their internet connection
              status. With the integrated service worker and Cache API, the
              application remains fully functional even offline, ensuring
              reliable access to saved content. Users can effortlessly retrieve
              their notes and access previously visited pages, making it a
              dependable tool for productive work, both online and offline.
            </p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://text-editor-khyati-36baef5da75a.herokuapp.com/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/thekhyatigandhi/Text-Editor"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={WeatherApp}
            class="card-img-top"
            alt="Weather-App"
          />
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              This is a weather dashboard application that allows users to
              search for cities and view current and future weather conditions.
              The application provides a user-friendly interface with form
              inputs to search for a city and displays the city's current
              weather conditions, as well as a 5-day forecast.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://thekhyatigandhi.github.io/weather-app/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/thekhyatigandhi/weather-app"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="WeatherApp "></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={WebApiQuiz}
            class="card-img-top"
            alt="Weather-App"
          />
          <div className="card-body">
            <h5 className="card-title">Web Api Quiz</h5>
            <p className="card-text">
              This is an multiple choice quiz app, created using html, css,
              javascript and web apis. When the user clicks on the right answer,
              they are taken to the next question. Every wrong answer means they
              will loose 10 seconds. The score is equal to the time remaining.
              This quiz is a time based quiz.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://thekhyatigandhi.github.io/Web-Api/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/thekhyatigandhi/Web-Api"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="WebApi"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={WorkDayScheduler}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Work Day Scheduler</h5>
            <p className="card-text">
              This Work Day Scheduler is a daily planner designed for employees
              with busy schedules. It allows you to add important events to a
              daily planner and manage your time effectively. The planner
              displays the current day, date and time at the top of the calendar
              and provides unique color coded timeblocks for standard business
              hours. You can enter events into the timeblocks and save them, and
              the saved events persist even after refreshing the page.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://thekhyatigandhi.github.io/Work-Day-Scheduler/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/thekhyatigandhi/Work-Day-Scheduler"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="WorkDayScheduler"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={passwordGenerator}
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              This is a webpage to randomly generate a password for an employee
              to access sensitive data. The randomly generated password meets
              certain criteria so that it provides greater security. This app
              will run in the browser and will feature dynamically updated HTML
              and CSS powered by the JavaScript code
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://thekhyatigandhi.github.io/javascript/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/thekhyatigandhi/javascript"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="generateMyPasswordTechnologies"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
