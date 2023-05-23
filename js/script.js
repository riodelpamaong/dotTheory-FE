// Animate About Us SVG
const svgObject = document.getElementById('about-us-svg');
svgObject.addEventListener('load', function () {
    const svgDoc = svgObject.contentDocument; // Access the SVG document
    const svgContent = svgDoc.querySelector('svg'); // Get the root <svg> element
    const paths = svgContent.querySelectorAll('path'); // Select all <path> elements within the SVG

    gsap.set(paths, { transformOrigin: 'center bottom' });

    paths.forEach((path, index) => {
        gsap.fromTo(
            path,
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 1,
                delay: index * 0.2,
                ease: 'power2.out',
            }
        );
    });
});

// Animate Our Mission SVG
const ourMissionSvgObject = document.getElementById('our-mission-svg');
ourMissionSvgObject.addEventListener('load', function () {
    const ourMissionSvgDoc = ourMissionSvgObject.contentDocument; // Access the SVG document

    const svgContent = ourMissionSvgDoc.querySelector('svg'); // Get the root <svg> element

    const snowGlobeGroup = svgContent.getElementById('cel-snow-globe');

    // Target the specific path element within the SVG content
    const paths = snowGlobeGroup.querySelectorAll('.inner-circle');

    function animateInnerCircle(paths) {
        let index = 0;

        function animateNextPath() {
            gsap.fromTo(
                paths[index],
                { stroke: 'black' }, // Initial state: black stroke color
                {
                    stroke: '#027f3e', // Target color: green stroke color
                    duration: 2, // Animation duration in seconds
                    onComplete: () => {
                        // Animation complete callback
                        console.log(`Path ${index + 1} animation completed.`);

                        if (index === 4) {
                            // Reset stroke color to black for all paths
                            gsap.set(paths, { stroke: 'black' });
                        }

                        index = (index + 1) % paths.length; // Increment index and wrap around
                        animateNextPath(); // Trigger the next path animation
                    },
                }
            );
        }

        animateNextPath(); // Start the animation for the first path
    }

    animateInnerCircle(Array.from(paths));
});

// Animate Why Choose Us SVG
const whyChooseUsSvgObject = document.getElementById('why-choose-us-svg');
whyChooseUsSvgObject.addEventListener('load', function () {
    const whyChooseUsSvgDoc = whyChooseUsSvgObject.contentDocument; // Access the SVG document

    const svgContent = whyChooseUsSvgDoc.querySelector('svg'); // Get the root <svg> element

    // Target the specific path element within the SVG content
    const targetPath = svgContent.querySelector('#check');

    // Animate the path color using GSAP
    gsap.to(targetPath, {
        fill: '#027f3e', // Change the color to red
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Reverse the animation on each repeat
        duration: 1, // Animation duration in seconds
        delay: 0.5, // Delay before the animation starts
    });
});

// Animate Contact Us SVG
const contactUsSvgObject = document.getElementById('contact-us-svg');
contactUsSvgObject.addEventListener('load', function () {
    const contactUsSvgDoc = contactUsSvgObject.contentDocument; // Access the SVG document

    const svgContent = contactUsSvgDoc.querySelector('svg'); // Get the root <svg> element

    const womenTalkingConvoCircle = svgContent.getElementById('_x30_5_women_talking');

    console.log(womenTalkingConvoCircle)

    // Target the specific path element within the SVG content
    const paths = womenTalkingConvoCircle.querySelectorAll('.inner-convo-circle');

    function animeInnerConvoCirclePath(paths) {
        let index = 0;

        function animateNextConvoCirclePath() {
            gsap.fromTo(
                paths[index],
                { fill: 'black' }, // Initial state: black fill color
                {
                    fill: '#027f3e', // Target color: green fill color
                    duration: 1, // Animation duration in seconds
                    onComplete: () => {
                        // Animation complete callback
                        console.log(`Path ${index + 1} animation completed.`);

                        if (index === 2) {
                            // Reset fill color to black for all paths
                            gsap.set(paths, { fill: 'black' });
                        }

                        index = (index + 1) % paths.length; // Increment index and wrap around
                        animateNextConvoCirclePath(); // Trigger the next path animation
                    },
                }
            );
        }

        animateNextConvoCirclePath(); // Start the animation for the first path
    }

    animeInnerConvoCirclePath(Array.from(paths));
});