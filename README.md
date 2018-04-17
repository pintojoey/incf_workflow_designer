# incf_workflow_designer

## Overview
INCF has been working on using EEG event-related potential signal processing and machine learning methods for building assistive systems for motor impaired people. This system collects human brain data of audio/video stimulated subject. The data processed by customized classifiers is provided as a feedback leading to an action like turning on a TV, opening a window sunblind etc. The team has developed a client-server architecture to provide an interface to the procedures being applied onto the data stored on a distributed file system.

This project aims at building an easy to use graphical interface that can streamline the configuration of the parameters controlling individual signal processing sub-routines and thus make it easy to design complicated signal flows and execute them. The entire workflow created by the user will be exportable and reusable. The aim will also be to make the overall process more user-friendly. Secondary efforts will be targeted to make the tool user friendly and enable easy deployment of workflows on distributed computing frameworks.

## Prototype Implementation
A video demo of the prototype is available here:-

https://drive.google.com/file/d/1rvYc1R9KdraQgWe_uwucJ-3lqdOQUPI1/view?usp=sharing

Implementation of a very basic SVM train/test flow and corresponding JSON Representation:

The flow represents 4 kinds of entities
Data: an input vector represented as a file with defined headers
SVM: A simple SVM classifier implementation with modifiable attributes, 2 inputs and 2 outputs.
Model: An SVM training model stored in a file
Output: Indicates the overall output of the system
Complex signal processing routines may be represented in a similar flow pattern by having multiple blocks with defined inputs and outputs. The prototype implementation in javascript can validate input types, annotate edges and provides a data structure that can easily be used to add custom conditions or input validation techniques.

## Running the code

Host the project on any http server like Apache, XAMPP, LAMPP in the htdocs folder and access index.html
