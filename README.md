# JPMC-tasks

All tasks completed as a part of Virtual Software Engineering Internship through Forage (formerly InsideSherpa). 

# Introduction

<br>
<p align="center">
<a href="https://www.insidesherpa.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/Technology%20Virtual%20Experience" target="_blank">
<img src="https://insidesherpa-assets.s3-ap-southeast-2.amazonaws.com/icons/jpmorgan/github+repo+images/jpm+gitub+.png"></a>
</p>

<p align="center"> 
	<b><a href="#task">Task Overview</a></b>
	|
	<b><a href="#installation">Installation Instructions</a></b>	
	| 
	<b><a href="https://www.insidesherpa.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/Technology%20Virtual%20Experience">JP Morgan Chase & Co Software Engineering Virtual Experience</a></b>
</p>

<h1> Introduction</h1> 
<b> Experience Technology at JP Morgan Chase & Co</b>
<p>Try out what real work is like in the technology team at JP Morgan Chase & Co. Fast track to the tech team with your work.</p>

<h2 id="task"> Modules</h2>

<ol>
	<li><b>Task 1:</b><p>Interface with a stock price data feed and set up your system for analysis of the data</p>
<p> <b>Aim:</b> We want to process the data feed of stock A and stock B’s price to enable us to analyse when trading for the stock should occur.</p></li>
	<li><b>Task 2:</b><p>Use JP Morgan Chase's frameworks and tools
Implement JP Morgan Chase’s Perspective open source code in preparation for data visualization</p>
<p> <b>Aim:</b>Take an incomplete setup of Perspective, i.e. a graph that updates manually, and make it work with the code from Task 1 such that it now updates automatically by continuously requesting from the server application</p></li>
	<li><b>Task 3:</b> <p>Display data visually for traders.
Use Perspective to create the chart for the trader’s dashboard.
</p>
<b>Aim:</b> Use Perspective to generate a chart that displays the data feed in a clear and visually appealing manner for traders to monitor this trading strategy. Basically, you have to modify the existing live chart to be able to (1) track and display the ratio between the two stock prices (2) show the historical upper and lower bounds of the stocks' ratio (3) and finally, show 'alerts'  whenever these bounds are crossed by the ratio.
</li>
</ol>

<h2 id="installation" >Set up / Installation</h2>

<p>In order to get the server and client application code working on your machine, <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/setup_devenv_m1_v6.pdf">follow the setup here</a></p>

<h2>How to Run</h2>
To start the server, run

    python server.py

this will create random market called 'test.csv' in your working directory if one does not already exist.

If you encounter an issue with `datautil.parser`, run this command:

    pip install python-dateutil

If you don't have pip yet, you can install it from: https://pip.pypa.io/en/stable/installing/

To start the example client, run:

    python client.py

To unit test the example client, run:
python client_test.py

<h2>How to request from the server using curl</h2>
<!--See also [client.py](https://github.com/texodus/exchange_simulator/blob/master/client.py)-->
Query:

    $ curl 'http://localhost:8080/query?id=1'
    {"id": "1", "top_ask": {"price": 129.18, "size": 70}, "timestamp": "2016-08-06 12:32:11.821574", "top_bid": {"price": 128.79, "size": 61}}

<h2>How to fix the code to meet objectives</h2>
<p>To make the changes necessary to complete the objectives of this task, <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/making_changes_m1_v4a.pdf">follow this guide</a>.</p>
<p>To do the bonus task, <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/client_test_m1_v1a.pdf">read this</a>.</p>

<h2>How to submit your work</h2>
<p>A patch file is what is required from you to submit. To create a patch file, <a href="https://insidesherpa.s3.amazonaws.com/vinternships/companyassets/Sj7temL583QAYpHXD/create_patch_file_v3a.pdf">follow this guide</a>. Then submit the patch file in the <a href="https://www.insidesherpa.com/modules/R5iK7HMxJGBgaSbvk/gtAhtcvke9AFCzqME">JPM Module 1 Page</a>.</p>
