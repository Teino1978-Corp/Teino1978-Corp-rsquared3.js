/**
 * Returns the r^2 value for a three-dimensional data set.
 *
 * `r` is the Pearson product-moment correlation coefficient, a measure of
 * linear correlation.
 *
 * @param {Object[]} data
 *   An array of vectors with `x`, `y`, and `z` properties representing points
 *   in the data set.
 *
 * @return {Number}
 *   The r^2 value for the input data.
 */
function rsquared3(data) {
    var avgX = 0,
        avgY = 0,
        avgZ = 0,
        avg = 0,
        sseX = 0,
        sseY = 0,
        sseZ = 0,
        n = data.length,
        i;
    for (i = 0; i < n; i++) {
        avgX += data[i].x;
        avgY += data[i].y;
        avgZ += data[i].z;
    }
    avgX /= n;
    avgY /= n;
    avgZ /= n;
    for (i = 0; i < n; i++) {
        avg += (data[i].x - avgX) * (data[i].y - avgY) * (data[i].z - avgZ);
        sseX += (data[i].x - avgX) * (data[i].x - avgX);
        sseY += (data[i].y - avgY) * (data[i].y - avgY);
        sseZ += (data[i].z - avgZ) * (data[i].z - avgZ);
    }
    avg /= n;
    var r = avg / Math.sqrt((sseX * sseY * sseZ) / (n * n * n));
    return r*r;
}