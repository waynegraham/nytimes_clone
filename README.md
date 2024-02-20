
# Dataset

> Note: VLM dataset from Virginia Tech contains 38,314,447 records in the table. These instructions will take some time (e.g. minutes) to complete.

* Downloaded VLM and converted to CSV.
* Created data schema (id, latitude, longitude, vlm, vlm_sd); everything as `real`
* Imported into PostGIS (`COPY vlm_data(latitude, longitude, vlm, vlm_sd) FROM '/tmp/vlm.csv DELIMITER ',';` )
* Add a `geometry` column (`ALTER TABLE vlm_data ADD COLUMN geom geometry(Point, 4326);`)
* Update with actual GEOM (`UPDATE vlm_data SET geom = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326);`)
* Create a spatial index on geom column (`CREATE INDEX vlm_geom_idx ON vlm_data USING GIST(geom);`)

Probably good to vacuum at this point too.

## QGIS

Create PostGIS connection

### Colorize Dataset

https://gis.stackexchange.com/questions/379167/how-do-i-change-the-color-of-points-using-qgis-based-on-a-value

### Simplify dataset

https://gis.stackexchange.com/questions/139447/reducing-number-of-points-keeping-most-recent-data-within-given-distance-using
