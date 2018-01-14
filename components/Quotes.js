export default () => (
  <div className="container">
    <div>
      <p className="p1">
        Love is like the wind, you can't see it, but you can feel it.
      </p>
    </div>
    <div>
      <p className="pn">
        Love is patient, love is kind. It does not envy, it does not boast, it
        is not proud. It does not dishonor others, it is not self-seeking, it is
        not easily angered, it keeps no record of wrongs. Love does not delight
        in evil but rejoices with the truth. It always protects, always trusts,
        always hopes, always perseveres.
      </p>
    </div>
    <div>
      <p className="pn">
        Love is the answer to everything. It's the only reason to do anything.
        If you don't write stories you love, you'll never make it. If you don't
        write stories that other people love, you'll never make it.
      </p>
    </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        background: white;
      }
      .p1 {
        font-size: 32px;
        text-align: right;
        color: coral;
      }
      .pn {
        line-height: 24px;
        text-align: justify;
      }
      @media screen and (max-width: 600px) {
        .p1 {
          text-align: center;
        }
        .pn {
          line-height: 16px;
        }
      }
    `}</style>
  </div>
);
