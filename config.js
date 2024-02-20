var config = {
    style: 'mapbox://styles/wsg4w/cl3q4gaif007b14nvuz77dvcq', // boston
    // style: 'mapbox://styles/wsg4w/clst6x60902fj01qrb9rt7myh', // plain
    accessToken: 'pk.eyJ1Ijoid3NnNHciLCJhIjoiTVd4cXdScyJ9.ypK9cLCVFReavCn9b_hhWQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: false,
    title: 'The East Coast Is Sinking',
    subtitle: 'New satellite-based research reveals how land along the coast is slumping into the ocean, compounding the danger from global sea level rise.',
    byline: 'By Mira Rojanasakul and Marco Hernandez',
    pubdate: 'Feb. 13, 2024',
    footer: 'Source: Story text from <a href="https://www.nytimes.com/interactive/2024/02/13/climate/flooding-sea-levels-groundwater.html">New York Times</a>',
    chapters: [
        {
            id: 'boston',
            alignment: 'right',
            description: '<p>The most vulnerable areas of Boston have been sinking up to 3.8 centimeters per decade, which adds up to nearly 10 centimeters by 2050, based on the analysis of satellite data from 2007 to 2020.</p><div class="label"><p><span class="left-label">Sinking by 2050</span><span class="right-label">Rising</span><img src="key-base-Artboard_1.png" alt="key"></p></div>',
            image: '',
            location: {
                center: [-69.93233, 42.95056],
                zoom: 8,
                pitch: 0.00,
                bearing: 19.20
            },
        },
        {
            id: 'nyc',
            alignment: 'left',
            description: '<p>Parts of New York City and Long Island are sinking over 3 centimeters per decade.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-73.97997, 40.69785],
                zoom: 8.0,
                pitch: 6,
                bearing: 19.5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atlantic-city',
            alignment: 'right',
            description: '<p>Atlantic City is sinking up to 4 centimeters per decade. Nearby groundwater pumping has caused soils to compact.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-74.44303, 39.36317],
                zoom: 8,
                pitch: 37.5,
                bearing: 19.5
            },
            onChapterEnter: [ ],
            onChapterExit: [ ]
        },
        {
            id: 'baltimore',
            alignment: 'left',
            description: '<p>Several hotspots in Maryland are sinking over 10 centimeters per decade, while other areas are rising. Adjacent land moving at different rates can put infrastructure at risk.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-76.60060, 39.32008],
                zoom: 8,
                pitch: 51.50,
                bearing: 19.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hampton_roads',
            alignment: 'left',
            title: '',
            image: '',
            description: '<p>Hampton Roads, Va., which is sinking over 2 centimeters per decade, is <a href="https://www.nytimes.com/2022/10/20/climate/treated-sewage-virginia-aquifer.html">pumping treated wastewater underground</a> to try to slow the pace.</p><p><img src="key-base-Artboard_1.png" alt="key"></p>',
            location: {
                center: [-76.31035, 36.99186],
                zoom: 8,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [ ],
            onChapterExit: [ ]
        },
        {
            id: 'charleston',
            alignment: 'right',
            description: '<p>Charleston, S.C., which is affected by groundwater pumping, is sinking up to 5.7 centimeters per decade.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-80.03851, 32.78961],
                zoom: 8,
                pitch: 41.00,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jacksonville',
            alignment: 'left',
            description: '<p>Northeast Florida has experienced some rising, up to about 1 centimeter per decade, as erosion of porous rocks has lightened the area’s weight.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-81.73428, 30.34533],
                zoom: 8,
                pitch: 41.00,
                bearing: -26.40
            },
            onChapterEnter: [ ],
            onChapterExit: [ ]
        },
        {
            id: 'miami',
            alignment: 'left',
            description: '<p>Parts of Miami are sinking up to 1.5 centimeters a decade, adding to flood hazards from frequent tropical storms.<br><img src="key-base-Artboard_1.png" alt="key"></p>',
            image: '',
            location: {
                center: [-80.50903, 25.74751],
                zoom: 8,
                pitch: 50.00,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'article-1',
            alignment: 'full',
            title: '',
            image: '',
            description: '<div class="container"><p>The <a target="_blank" href="https://academic.oup.com/pnasnexus/article/3/1/pgad426/7504900">new research</a> from Virginia Tech and the U.S. Geological Survey used satellite data to show the mounting threats to coastal communities. Nearly 40 percent of Americans live along coasts, where aging buildings, roads and rails face structural damage from floods.</p><p>"You have a hazard that is becoming worse every day with sea level rise," said lead author Leonard Ohenhen, Ph.D. candidate at Virginia Tech.</p><p>The global average sea level has been rising around 3.3 millimeters per year since the early 1990s, according to satellite readings from <a target="_blank" href="https://sealevel.nasa.gov/understanding-sea-level/key-indicators/global-mean-sea-level/">NASA</a>. And based on longer records from tide gauges, we know that rate is accelerating, said Kenneth Miller, a professor of earth and planetary sciences at Rutgers University. Local subsidence, or sinking land, makes the threat of sea level rise worse in some places than others.</p><p><div id="vis"></div></p><p>Researchers say a dominant cause for subsidence is groundwater depletion. A layer cake of overlapping aquifers extends from New Jersey to Florida along the coast, providing a reliable source of water for drinking, irrigation and industrial uses. Though the region gets regular rainfall, deeper aquifers below clay or bedrock <a target="_blank" href="https://www.nytimes.com/interactive/2023/08/28/climate/groundwater-drying-climate-change.html">can take hundreds or thousands of years</a> to recharge once water is pumped out. Surface aquifers can be prone to pollution and saltwater intrusion.</p><p>Once water is removed, soils can compress and collapse, causing the land surface to sink. Cities built on drained marshland or fill are especially vulnerable to compaction.</p><p>Other forces can also influence vertical land movement: Sediments can build up at river deltas and naturally compress under their own weight. And as the weight of enormous glaciers that once extended down to New Jersey lifted after the last ice age, a seesaw effect is causing bedrock across the mid-Atlantic and South to sink by about 1 millimeter per year.</p><p>Boston should be on the rising end of that seesaw, but many areas of the city were built on soft soil prone to compaction.</p></div>',
            location: {
                center: [-71.05682, 42.36173],
                zoom: 8,
                pitch: 50.00,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'article-2',
            alignment: 'left',
            title: '',
            image: '',
            description: '<p>Parts of Boston were built on marshland, reclaimed from the sea for buildings, docks and other structures.</p><p>This is where the coastline was in the 17th century. The areas added to the original coastline have greater subsidence.</p>',
            location: {
                center: [-71.05682, 42.36173],
                zoom: 13,
                pitch: 0.00,
                bearing: 13
            },
            onChapterEnter: [
                {
                    layer: '9531-453nwm',
                    opacity: 0.25
                }
            ],
            onChapterEnd: [ ]
        },
        {
            id: 'article-3',
            alignment: 'full',
            title: '',
            image: '',
            description: '<div class="container"><p>To stabilize early buildings in Boston, wood pilings were driven into water-logged earth where groundwater preserved the structures. Depletion of those aquifers has exposed the wood to air in some cases, causing foundations to rot. Some homeowners have had to <a target="_blank" href="https://www.wsj.com/articles/bostons-priciest-real-estate-is-sinking-into-the-earth-11583416663">spend hundreds of thousands of dollars</a> to repair the pilings to keep their homes from collapsing.</p><p>A few millimeters of sinking a year can seem gradual, but the effects can be extreme: storm surges can suddenly wash away the soil from beneath the roads, or floodwaters can fill basements and cut off emergency routes. Each inch the land slumps towards the water table can make floods significantly, catastrophically worse.</p><p>“That\'s the thing about sea level [rise]. It\'s slow and it\'s insidious and continuous,” said Dr. Miller, at Rutgers University. That is, until the next big storm hits. “We’ve been fortunate in the past 11 years since [Hurricane] Sandy that we\'ve not seen an event like that. We obviously are very likely to see similar events in the next ten years or so.”</p><p>Patches of land that sink or rise more quickly than adjacent areas can also do outsize damage, cracking foundations and destabilizing structures over time. The authors of the study found these distortion hotspots near Cape Canaveral, the suburbs and exurbs of Boston, and across Delaware and Maryland on the Delmarva Peninsula.</p><p>An <a target="_blank" href="https://infrastructurereportcard.org/">assessment</a> from the American Society of Civil Engineers in 2021 found that more than 40 percent of the nation\'s roads are in poor or mediocre condition. The assessment of bridges, airports and water infrastructure is similar. The Army Corps of Engineers, which maintains the country\'s aging levees and is involved in the planning and construction of new coastal protections, says that the mounting disasters in recent years have led directly to a greater number of resilience projects.</p><p>"We definitely have seen an increase in the number of incidents related to subsidence as it relates to flooding in the last decade plus,"" said Sandy Hertz, director of the Office of Climate Change Resilience and Adaptation at the Maryland Department of Transportation. The state expects to see an additional 2.5 feet of relative sea level rise by 2100, according to a <a target="_blank" href="https://www.umces.edu/sea-level-rise-projections">study</a> published last year.</p><p>Maryland will receive $107 million, out of a total $7.3 billion allocated to states, to improve the climate resilience of its transportation systems through the 2021 bipartisan infrastructure law. Coastal communities will also receive $2.6 billion over five years from the 2022 Inflation Reduction Act to prepare and respond to climate hazards.</p><p>An effort among multiple federal agencies to coordinate on these regional climate risks has grown in recent years. This detailed survey of Atlantic Coast land motion was part of a broader U.S.G.S. study on a suite of coastal hazards. It adds to a vast trove of new data for decision-making around coastal risk, including where people live and rely on critical infrastructure, and where the water is now versus where it may be in 10, 20, 50 years or beyond.</p><p>“Water does not obey geographic boundaries, and neither does land subsidence,” said Ms. Hertz. “We really need to take a shared approach to resiliency to protect not just the emergency evacuation routes, but the significant infrastructure and destinations that we have across the East Coast.”</p></div>'
        }
    ]
};