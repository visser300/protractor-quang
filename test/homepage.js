describe('test main components', function() {
    it('test components of homepage', function() {
      browser.get('#/crunchinator');
      
      let EC = protractor.ExpectedConditions;
      let video = $$('#splash video');

      browser.wait(function(){
        return EC.visibilityOf(video.first()).call().then(function(present){    
             console.log('\n' + 'looking for element')
             return present;
        });
       }, 20000);

      // open up the rest of components
      element(by.css('.movealong')).click();

      // expect 19 containers
      var containers = $$('.data-set-container');
      expect(containers.count()).toBe(19);

      // expect correct decorator components
      let statusInfo = $$('.status');
      expect(statusInfo.count()).toBe(1);

      let headerInfo = $$('.header-text');
      expect(headerInfo.count()).toBe(2);
    });
});