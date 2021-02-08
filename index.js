const core = require('@actions/core');
const github = require('@actions/github');
const { runInContext } = require('vm');
import {run} from './src/autograding'
try {
  run();
} catch (error) {
  console.error("from index.js")
  //core.setFailed(error.message);
}
