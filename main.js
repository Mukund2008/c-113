function setup()
{
 canvas=createCanvas(640,480);
 canvas.position(110,250);
 video=createCapture(VIDEO);
 video.hide();

 filter_tint="";
}

function draw()
{
 image(video,0,0,640,480);
 tint(filter_tint);
}

function take_snapshot()
{
 save("student_img.png");

}

function filterTint()
{
    filter_tint=document.getElementById("color_name").value;
}