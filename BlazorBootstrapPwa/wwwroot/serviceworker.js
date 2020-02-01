var cacheName = 'budget-app';
var filesToCache = [
    //wwwroot
    './.nojekyll',
    './index.html',
    './manifest.json',
    './serviceworker.js',
    //icons
    './icons/icon-192.png',
    './icons/icon-512.png',
    //icons/bootstrap
    './icons/bootstrap/alarm-fill.svg',
    './icons/bootstrap/alarm.svg',
    './icons/bootstrap/alert-circle-fill.svg',
    './icons/bootstrap/alert-circle.svg',
    './icons/bootstrap/alert-octagon-fill.svg',
    './icons/bootstrap/alert-octagon.svg',
    './icons/bootstrap/alert-square-fill.svg',
    './icons/bootstrap/alert-square.svg',
    './icons/bootstrap/alert-triangle-fill.svg',
    './icons/bootstrap/alert-triangle.svg',
    './icons/bootstrap/archive-fill.svg',
    './icons/bootstrap/archive.svg',
    './icons/bootstrap/arrow-bar-bottom.svg',
    './icons/bootstrap/arrow-bar-left.svg',
    './icons/bootstrap/arrow-bar-right.svg',
    './icons/bootstrap/arrow-bar-up.svg',
    './icons/bootstrap/arrow-clockwise.svg',
    './icons/bootstrap/arrow-counterclockwise.svg',
    './icons/bootstrap/arrow-down-left.svg',
    './icons/bootstrap/arrow-down-right.svg',
    './icons/bootstrap/arrow-down-short.svg',
    './icons/bootstrap/arrow-down.svg',
    './icons/bootstrap/arrow-left-right.svg',
    './icons/bootstrap/arrow-left-short.svg',
    './icons/bootstrap/arrow-left.svg',
    './icons/bootstrap/arrow-repeat.svg',
    './icons/bootstrap/arrow-right-short.svg',
    './icons/bootstrap/arrow-right.svg',
    './icons/bootstrap/arrow-up-down.svg',
    './icons/bootstrap/arrow-up-left.svg',
    './icons/bootstrap/arrow-up-right.svg',
    './icons/bootstrap/arrow-up-short.svg',
    './icons/bootstrap/arrow-up.svg',
    './icons/bootstrap/arrows-angle-contract.svg',
    './icons/bootstrap/arrows-angle-expand.svg',
    './icons/bootstrap/arrows-collapse.svg',
    './icons/bootstrap/arrows-expand.svg',
    './icons/bootstrap/arrows-fullscreen.svg',
    './icons/bootstrap/at.svg',
    './icons/bootstrap/award.svg',
    './icons/bootstrap/backspace-fill.svg',
    './icons/bootstrap/backspace-reverse-fill.svg',
    './icons/bootstrap/backspace-reverse.svg',
    './icons/bootstrap/backspace.svg',
    './icons/bootstrap/bar-chart-fill.svg',
    './icons/bootstrap/bar-chart.svg',
    './icons/bootstrap/battery-charging.svg',
    './icons/bootstrap/battery-full.svg',
    './icons/bootstrap/battery.svg',
    './icons/bootstrap/bell-fill.svg',
    './icons/bootstrap/bell.svg',
    './icons/bootstrap/blockquote-left.svg',
    './icons/bootstrap/blockquote-right.svg',
    './icons/bootstrap/book-half-fill.svg',
    './icons/bootstrap/book.svg',
    './icons/bootstrap/bookmark-fill.svg',
    './icons/bootstrap/bookmark.svg',
    './icons/bootstrap/bootstrap-fill.svg',
    './icons/bootstrap/bootstrap-reboot.svg',
    './icons/bootstrap/bootstrap.svg',
    './icons/bootstrap/box-arrow-bottom-left.svg',
    './icons/bootstrap/box-arrow-bottom-right.svg',
    './icons/bootstrap/box-arrow-down.svg',
    './icons/bootstrap/box-arrow-left.svg',
    './icons/bootstrap/box-arrow-right.svg',
    './icons/bootstrap/box-arrow-up-left.svg',
    './icons/bootstrap/box-arrow-up-right.svg',
    './icons/bootstrap/box-arrow-up.svg',
    './icons/bootstrap/braces.svg',
    './icons/bootstrap/brightness-fill-high.svg',
    './icons/bootstrap/brightness-fill-low.svg',
    './icons/bootstrap/brightness-high.svg',
    './icons/bootstrap/brightness-low.svg',
    './icons/bootstrap/brush.svg',
    './icons/bootstrap/bucket-fill.svg',
    './icons/bootstrap/bucket.svg',
    './icons/bootstrap/building.svg',
    './icons/bootstrap/bullseye.svg',
    './icons/bootstrap/calendar-fill.svg',
    './icons/bootstrap/calendar.svg',
    './icons/bootstrap/camera-video-fill.svg',
    './icons/bootstrap/camera-video.svg',
    './icons/bootstrap/camera.svg',
    './icons/bootstrap/capslock-fill.svg',
    './icons/bootstrap/capslock.svg',
    './icons/bootstrap/chat-fill.svg',
    './icons/bootstrap/chat.svg',
    './icons/bootstrap/check-box.svg',
    './icons/bootstrap/check-circle.svg',
    './icons/bootstrap/check.svg',
    './icons/bootstrap/chevron-compact-down.svg',
    './icons/bootstrap/chevron-compact-left.svg',
    './icons/bootstrap/chevron-compact-right.svg',
    './icons/bootstrap/chevron-compact-up.svg',
    './icons/bootstrap/chevron-down.svg',
    './icons/bootstrap/chevron-left.svg',
    './icons/bootstrap/chevron-right.svg',
    './icons/bootstrap/chevron-up.svg',
    './icons/bootstrap/circle-fill.svg',
    './icons/bootstrap/circle-half.svg',
    './icons/bootstrap/circle-slash.svg',
    './icons/bootstrap/circle.svg',
    './icons/bootstrap/clock-fill.svg',
    './icons/bootstrap/clock.svg',
    './icons/bootstrap/cloud-download.svg',
    './icons/bootstrap/cloud-fill.svg',
    './icons/bootstrap/cloud-upload.svg',
    './icons/bootstrap/cloud.svg',
    './icons/bootstrap/code-slash.svg',
    './icons/bootstrap/code.svg',
    './icons/bootstrap/columns-gutters.svg',
    './icons/bootstrap/columns.svg',
    './icons/bootstrap/command.svg',
    './icons/bootstrap/compass.svg',
    './icons/bootstrap/cone-striped.svg',
    './icons/bootstrap/cone.svg',
    './icons/bootstrap/controller.svg',
    './icons/bootstrap/credit-card.svg',
    './icons/bootstrap/cursor-fill.svg',
    './icons/bootstrap/cursor.svg',
    './icons/bootstrap/dash.svg',
    './icons/bootstrap/diamond-half.svg',
    './icons/bootstrap/diamond.svg',
    './icons/bootstrap/display-fill.svg',
    './icons/bootstrap/display.svg',
    './icons/bootstrap/document-code.svg',
    './icons/bootstrap/document-diff.svg',
    './icons/bootstrap/document-richtext.svg',
    './icons/bootstrap/document-spreadsheet.svg',
    './icons/bootstrap/document-text.svg',
    './icons/bootstrap/document.svg',
    './icons/bootstrap/documents-alt.svg',
    './icons/bootstrap/documents.svg',
    './icons/bootstrap/dot.svg',
    './icons/bootstrap/download.svg',
    './icons/bootstrap/egg-fried.svg',
    './icons/bootstrap/eject-fill.svg',
    './icons/bootstrap/eject.svg',
    './icons/bootstrap/envelope-fill.svg',
    './icons/bootstrap/envelope-open-fill.svg',
    './icons/bootstrap/envelope-open.svg',
    './icons/bootstrap/envelope.svg',
    './icons/bootstrap/eye-fill.svg',
    './icons/bootstrap/eye-slash-fill.svg',
    './icons/bootstrap/eye-slash.svg',
    './icons/bootstrap/eye.svg',
    './icons/bootstrap/filter.svg',
    './icons/bootstrap/flag-fill.svg',
    './icons/bootstrap/flag.svg',
    './icons/bootstrap/folder-fill.svg',
    './icons/bootstrap/folder-symlink-fill.svg',
    './icons/bootstrap/folder-symlink.svg',
    './icons/bootstrap/folder.svg',
    './icons/bootstrap/fonts.svg',
    './icons/bootstrap/forward-fill.svg',
    './icons/bootstrap/forward.svg',
    './icons/bootstrap/gear-fill.svg',
    './icons/bootstrap/gear-wide-connected.svg',
    './icons/bootstrap/gear-wide.svg',
    './icons/bootstrap/gear.svg',
    './icons/bootstrap/geo.svg',
    './icons/bootstrap/graph-down.svg',
    './icons/bootstrap/graph-up.svg',
    './icons/bootstrap/grid-fill.svg',
    './icons/bootstrap/grid.svg',
    './icons/bootstrap/hammer.svg',
    './icons/bootstrap/hash.svg',
    './icons/bootstrap/heart-fill.svg',
    './icons/bootstrap/heart.svg',
    './icons/bootstrap/house-fill.svg',
    './icons/bootstrap/house.svg',
    './icons/bootstrap/image-alt.svg',
    './icons/bootstrap/image-fill.svg',
    './icons/bootstrap/image.svg',
    './icons/bootstrap/images.svg',
    './icons/bootstrap/inbox-fill.svg',
    './icons/bootstrap/inbox.svg',
    './icons/bootstrap/inboxes-fill.svg',
    './icons/bootstrap/inboxes.svg',
    './icons/bootstrap/info-fill.svg',
    './icons/bootstrap/info-square-fill.svg',
    './icons/bootstrap/info-square.svg',
    './icons/bootstrap/info.svg',
    './icons/bootstrap/justify-left.svg',
    './icons/bootstrap/justify-right.svg',
    './icons/bootstrap/justify.svg',
    './icons/bootstrap/kanban-fill.svg',
    './icons/bootstrap/kanban.svg',
    /*'./icons/bootstrap/laptop.svg',
    './icons/bootstrap/layout-sidebar-reverse.svg',
    './icons/bootstrap/layout-sidebar.svg',
    './icons/bootstrap/layout-split.svg',
    './icons/bootstrap/list-check.svg',
    './icons/bootstrap/list-ol.svg',
    './icons/bootstrap/list-task.svg',
    './icons/bootstrap/list-ul.svg',
    './icons/bootstrap/list.svg',
    './icons/bootstrap/lock-fill.svg',
    './icons/bootstrap/lock.svg',
    './icons/bootstrap/map.svg',
    './icons/bootstrap/mic.svg',
    './icons/bootstrap/moon.svg',
    './icons/bootstrap/music-player-fill.svg',
    './icons/bootstrap/music-player.svg',
    './icons/bootstrap/option.svg',
    './icons/bootstrap/outlet.svg',
    './icons/bootstrap/pause-fill.svg',
    './icons/bootstrap/pause.svg',
    './icons/bootstrap/pen.svg',
    './icons/bootstrap/pencil.svg',
    './icons/bootstrap/people-fill.svg',
    './icons/bootstrap/people.svg',
    './icons/bootstrap/person-fill.svg',
    './icons/bootstrap/person.svg',
    './icons/bootstrap/phone-landscape.svg',
    './icons/bootstrap/phone.svg',
    './icons/bootstrap/pie-chart-fill.svg',
    './icons/bootstrap/pie-chart.svg',
    './icons/bootstrap/play-fill.svg',
    './icons/bootstrap/play.svg',
    './icons/bootstrap/plug.svg',
    './icons/bootstrap/plus.svg',
    './icons/bootstrap/power.svg',
    './icons/bootstrap/question-fill.svg',
    './icons/bootstrap/question-square-fill.svg',
    './icons/bootstrap/question-square.svg',
    './icons/bootstrap/question.svg',
    './icons/bootstrap/reply-all-fill.svg',
    './icons/bootstrap/reply-all.svg',
    './icons/bootstrap/reply-fill.svg',
    './icons/bootstrap/reply.svg',
    './icons/bootstrap/screwdriver.svg',
    './icons/bootstrap/search.svg',
    './icons/bootstrap/shield-fill.svg',
    './icons/bootstrap/shield-lock-fill.svg',
    './icons/bootstrap/shield-lock.svg',
    './icons/bootstrap/shield-shaded.svg',
    './icons/bootstrap/shield.svg',
    './icons/bootstrap/shift-fill.svg',
    './icons/bootstrap/shift.svg',
    './icons/bootstrap/skip-backward-fill.svg',
    './icons/bootstrap/skip-backward.svg',
    './icons/bootstrap/skip-end-fill.svg',
    './icons/bootstrap/skip-end.svg',
    './icons/bootstrap/skip-forward-fill.svg',
    './icons/bootstrap/skip-forward.svg',
    './icons/bootstrap/skip-start-fill.svg',
    './icons/bootstrap/skip-start.svg',
    './icons/bootstrap/speaker.svg',
    './icons/bootstrap/square-fill.svg',
    './icons/bootstrap/square-half.svg',
    './icons/bootstrap/square.svg',
    './icons/bootstrap/star-fill.svg',
    './icons/bootstrap/star-half.svg',
    './icons/bootstrap/star.svg',
    './icons/bootstrap/stop-fill.svg',
    './icons/bootstrap/stop.svg',
    './icons/bootstrap/stopwatch-fill.svg',
    './icons/bootstrap/stopwatch.svg',
    './icons/bootstrap/sun.svg',
    './icons/bootstrap/table.svg',
    './icons/bootstrap/tablet-landscape.svg',
    './icons/bootstrap/tablet.svg',
    './icons/bootstrap/tag-fill.svg',
    './icons/bootstrap/tag.svg',
    './icons/bootstrap/terminal-fill.svg',
    './icons/bootstrap/terminal.svg',
    './icons/bootstrap/text-center.svg',
    './icons/bootstrap/text-indent-left.svg',
    './icons/bootstrap/text-indent-right.svg',
    './icons/bootstrap/text-left.svg',
    './icons/bootstrap/text-right.svg',
    './icons/bootstrap/three-dots-vertical.svg',
    './icons/bootstrap/three-dots.svg',
    './icons/bootstrap/toggle-off.svg',
    './icons/bootstrap/toggle-on.svg',
    './icons/bootstrap/toggles.svg',
    './icons/bootstrap/tools.svg',
    './icons/bootstrap/trash-fill.svg',
    './icons/bootstrap/trash.svg',
    './icons/bootstrap/triangle-fill.svg',
    './icons/bootstrap/triangle-half.svg',
    './icons/bootstrap/triangle.svg',
    './icons/bootstrap/trophy.svg',
    './icons/bootstrap/tv-fill.svg',
    './icons/bootstrap/tv.svg',
    './icons/bootstrap/type-bold.svg',
    './icons/bootstrap/type-h.svg',
    './icons/bootstrap/type-h.svg',
    './icons/bootstrap/type-h.svg',
    './icons/bootstrap/type-italic.svg',
    './icons/bootstrap/type-strikethrough.svg',
    './icons/bootstrap/type-underline.svg',
    './icons/bootstrap/type.svg',
    './icons/bootstrap/unlock-fill.svg',
    './icons/bootstrap/unlock.svg',
    './icons/bootstrap/upload.svg',
    './icons/bootstrap/volume-down-fill.svg',
    './icons/bootstrap/volume-down.svg',
    './icons/bootstrap/volume-mute-fill.svg',
    './icons/bootstrap/volume-mute.svg',
    './icons/bootstrap/volume-up-fill.svg',
    './icons/bootstrap/volume-up.svg',
    './icons/bootstrap/wallet.svg',
    './icons/bootstrap/watch.svg',
    './icons/bootstrap/wifi.svg',
    './icons/bootstrap/window.svg',
    './icons/bootstrap/wrench.svg',
    './icons/bootstrap/x-circle-fill.svg',
    './icons/bootstrap/x-circle.svg',
    './icons/bootstrap/x-octagon-fill.svg',
    './icons/bootstrap/x-octagon.svg',
    './icons/bootstrap/x-square-fill.svg',
    './icons/bootstrap/x-square.svg',
    './icons/bootstrap/x.svg',*/
    //css
    './css/style.css',
    './css/style.css.map',   
    //_framework
    './_framework/blazor.boot.json',
    './_framework/blazor.webassembly.js',
    //_framework/wasm
    './_framework/wasm/mono.js',
    './_framework/wasm/mono.wasm',
    //_framework/_bin
    './_framework/_bin/BlazorBootstrapPwa.dll',
    './_framework/_bin/Microsoft.AspNetCore.Authorization.dll',
    './_framework/_bin/Microsoft.AspNetCore.Blazor.dll',
    './_framework/_bin/Microsoft.AspNetCore.Blazor.HttpClient.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.Forms.dll',
    './_framework/_bin/Microsoft.AspNetCore.Components.Web.dll',
    './_framework/_bin/Microsoft.AspNetCore.Metadata.dll',
    './_framework/_bin/Microsoft.Bcl.AsyncInterfaces.dll',
    './_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll',
    './_framework/_bin/Microsoft.Extensions.DependencyInjection.dll',
    './_framework/_bin/Microsoft.Extensions.Logging.Abstractions.dll',
    './_framework/_bin/Microsoft.Extensions.Options.dll',
    './_framework/_bin/Microsoft.Extensions.Primitives.dll',
    './_framework/_bin/Microsoft.JSInterop.dll',
    './_framework/_bin/Mono.WebAssembly.Interop.dll',
    './_framework/_bin/mscorlib.dll',
    './_framework/_bin/System.ComponentModel.DataAnnotations.dll',
    './_framework/_bin/System.Core.dll',
    './_framework/_bin/System.dll',
    './_framework/_bin/System.Net.Http.dll',
    './_framework/_bin/System.Runtime.CompilerServices.Unsafe.dll',
    './_framework/_bin/System.Text.Encodings.Web.dll',
    './_framework/_bin/System.Text.Json.dll',
    './_framework/_bin/WebAssembly.Bindings.dll',
    './_framework/_bin/WebAssembly.Net.Http.dll'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache); 
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});