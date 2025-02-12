'use strict';

const { ThreadOnlyChannel } = require('./ThreadOnlyChannel');

/**
 * Represents a media channel.
 * @extends {ThreadOnlyChannel}
 */
class MediaChannel extends ThreadOnlyChannel {}

exports.MediaChannel = MediaChannel;
