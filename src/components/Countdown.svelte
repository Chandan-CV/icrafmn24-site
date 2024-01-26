<script>
  import { onMount, onDestroy, tick } from "svelte";

  let countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const targetDate = new Date("July 12, 2024 00:00:00").getTime();

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    countdown.hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countdown.minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }

  /**
	 * @type {string | number | NodeJS.Timer | undefined}
	 */
  let interval;

  onMount(() => {
    // Update the countdown immediately on mount
    updateCountdown();

    // Update the countdown every second
    interval = setInterval(() => {
      tick();
      updateCountdown();
    }, 1000);
  });

  onDestroy(() => {
    // Cleanup interval on component destruction
    clearInterval(interval);
  });
</script>

<style>
  .number-thingy{
      font-weight: bold;
      color: #3a1f00;
  }
</style>

<div>
  <div class="font-InterTight text-sm font-semibold mb-10 text-center items-center flex gap-2 bg-orange-200 p-5 rounded-full">
    <span class="number-thingy md:text-4xl lg:text-4xl text-xl">{countdown.days}</span> days{" "}
    <span class="number-thingy md:text-4xl lg:text-4xl text-xl">{countdown.hours}</span> hours{" "}
    <span class="number-thingy md:text-4xl lg:text-4xl text-xl">{countdown.minutes}</span> minutes{" "}
    <span class="number-thingy md:text-4xl lg:text-4xl text-xl">{countdown.seconds}</span> seconds
  </div>
</div>
