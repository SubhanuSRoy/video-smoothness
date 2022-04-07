# We-HAck by WIE in collaboration with Honeywell

## Submission by Chethan Reddy (https://www.linkedin.com/in/chethan-reddy-0201791ba/) and Subhanu S Roy (https://www.linkedin.com/in/subhanu-sankar-roy/)

## Team Name: AIOverflow 

## Project Name: We-dio

## Problem Statement

During video acquisition, due to sensor malfunction, poor network bandwidth, acquired videos suffers from blurry artifacts, different noise effects. A surveillance camera developer needs to test the product by manually verifying these videos void from any unwanted artifacts. 
However, these videos are captured for long duration (Days of recordings) and manually reviewing recorded video for so long duration is too time-consuming and cost ineffective approach.

The objective of this problem is to find distorted frame timestamp (starting from the video first frame) and distortion type, provide suitable metric results. Further, participants are encouraged to analyze perceptual quality of the video and the most impacted patch region over the video duration.

## Expected Output
A software module to identify video perceptual defects and record time-stamp

## Our Solution
We have used AI Mathematics to target each kind of disruption and which algo we have used in each is mentioned in this 
pdf (https://drive.google.com/file/d/1_KVcr05HFt6i48bKp8idN11BIpEqIuxE/view?usp=sharing)
When our script is run it gives the output exactly as expected with the timestamps and the type of disturbance with a score given to each.
Not only this, we have also implemented our algorithmn into our website https://we-dio.netlify.app/ where user can enter a video and get the output in a tabular form.
Currently, our website does not work for large files as videos are usually very heavy (over 100s of mbs) so only a cloud based middleware repository can solve that. We were not able to implement a cloud solution because of time constraint and a paywall behind most cloud based middlewares.
