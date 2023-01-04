from selenium import webdriver

driver = webdriver.Chrome();
url = "https://swd.bits-hyderabad.ac.in/mess"
driver.get(url)
driver.implicitly_wait(5)

name = driver.find_element_by_id("name")
password = driver.find_element_by_id("password")

name.send_keys("f20190091")
password.send_keys("1RQ3FUI8")
driver.implicitly_wait(5)

driver.find_element_by_css_selector("input[type='radio'][name='user_mess'][value='1']").click()
driver.find_element_by_css_selector("input[type='radio'][name='bitsian'][value='bitsian']").click()
driver.implicitly_wait(5)

driver.find_element_by_css_selector("button[type='submit']").click()