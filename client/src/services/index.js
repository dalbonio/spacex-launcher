import axios from "axios";

const port = process.env.PORT || 3000;

const URL = process.env.NODE_ENV === "production" ? "https://spacexlauncher-dev.herokuapp.com/api" : `http://localhost:${port}/api`;

console.log(process.env.NODE_ENV)
console.log(URL)

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
};


export const upcomingLaunches = (_callback) => {
    api
      .get(`/upcoming`, config)
      .then((response) => {
        _callback(response);
      })
      .catch((errors) => {
        _callback(errors.response);
      });
};

export const nextLaunch = (_callback) => {
    api
      .get(`/next`, config)
      .then((response) => {
        _callback(response);
      })
      .catch((errors) => {
        _callback(errors.response);
      });
};

export const pastLaunches = (_callback) => {
    api
      .get(`/past`, config)
      .then((response) => {
        _callback(response);
      })
      .catch((errors) => {
        _callback(errors.response);
      });
};

export const latestLaunch = (_callback) => {
    api
      .get(`/latest`, config)
      .then((response) => {
        _callback(response);
      })
      .catch((errors) => {
        _callback(errors.response);
      });
};

export const getRocket = (id, _callback) => {
  api
    .get(`/rocket/${id}`, config)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
};

export const getLaunchpad = (id, _callback) => {
  api
    .get(`/launchpad/${id}`, config)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
};
