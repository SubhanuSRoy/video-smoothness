import imquality.brisque as brisque
import PIL.Image
import matplotlib.pyplot as plt

# image path
path = '../assets/chethan.jpeg'

# reading image
img = PIL.Image.open(path)

plt.imshow(img)
plt.axis('off')

# quality assessment of above image
print("image-quality  {}".format(brisque.score(img)))