package in.company.job;

import in.company.model.Coupon;
import in.company.repository.CouponsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.Calendar;

@Component
@Scope("singleton")
public class CouponExpirationDailyJob implements Runnable {

	@Autowired
	private CouponsRepository couponsRepo;

	private boolean quit;

	public CouponExpirationDailyJob() {

	}

	@Override
	public void run() {
		
	}

	public void stop() {
		quit = true;
	}

}