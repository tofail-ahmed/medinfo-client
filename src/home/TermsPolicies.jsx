import React from "react";
import "./terms.css";
import { useSelector } from "react-redux";

const TermsPolicies = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div>
      <div className="lg:mx-[20%] mx-[5%] my-14 text-justify text-slate-400">
      <h1 className="mt-16  lg:text-6xl text-2xl text-green-300 mb-10 font-extrabold text-center py-10 uppercase">
        Terms of Service
      </h1>
      <h1 className="text-md texts-slate-600 ">
        THIS DOCUMENT CONTAINS A MANDATORY ARBITRATION AGREEMENT AND CLASS
        ACTION WAIVER, WHICH AFFECT YOUR LEGAL RIGHTS. YOU SHOULD REVIEW THIS
        DOCUMENT IN ITS ENTIRETY BEFORE ACCESSING OR USING THE ONLINE SERVICES.
      </h1>

      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Disclosures
      </h1>
      <h1 className="my-6 text-lg">
        Certain products and services offered for purchase through this website,
        including prescription drug products, may be offered through Mark Cuban
        Cost Plus Drug Company, PBC (“Mark Cuban Cost Plus Drug Company”) or its
        contracted third parties, including WellDyneRx, LLC d/b/a/ HealthDyne
        Pharmacy or its affiliates (collectively, “HealthDyne”). Mark Cuban Cost
        Plus Drug Company also utilizes other third‐party vendors in connection
        with its provision of the products offered for purchase through this
        website.
      </h1>

      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Agreement and Terms
      </h1>
      <h1 className="my-6 text-lg">
        These Terms of Use (“Terms”) describe the rules for using Mark Cuban
        Cost Plus Drug Company’s (also “‘we,” “us,” “our,” and “Company”) and
        Affiliates’ (an entity controlling, controlled by, or under common
        control with a named party) online and mobile websites, platforms,
        services and applications (“Online Services”). <br />
        By using our Online Services, you agree to these Terms and our Privacy
        Policies. We may change these Terms at any time, and such changes will
        be posted on the Online Services, with the date of the last revision
        listed as the “Effective Date” at the bottom of these Terms. Any
        modifications will be effective immediately upon such posting. By
        continuing to use the Online Services, you consent to any changes to our
        Terms. <br className="my-4" />
        Your affirmative act of using the Online Services, or creating an
        account, constitutes your electronic signature to these Terms and your
        consent to enter into this agreement electronically. You may print and
        retain a copy of these Terms. To print, you will need (i) a device (such
        as a computer or mobile phone) with a web browser and Internet access
        and (ii) either a printer or storage space on such device.
      </h1>

      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Important Note Regarding Content of Online Services
      </h1>
      <h1 className="my-6 text-lg">
        The information and content (collectively, “Content”) on the Online
        Services is for your general educational information only and does not
        constitute professional medical advice, diagnosis, treatment, or
        recommendations of any kind by the Company. You should call your health
        care provider if you have questions, at any time, about your health. All
        information provided by the Company, or in connection with any
        communications supported by the Company, is intended to be for general
        information purposes only, and is in no way intended to create a
        provider/patient relationship as defined by state or federal law.
        <br />
        You are responsible for protecting your username (e.g., the email
        address and password that you provide when registering for Online
        Services) or other activation codes, and if they are compromised, you
        agree to change your username and password and immediately contact us.
      </h1>

      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Restrictions on Use of Online Services
      </h1>
      <h1 className="my-4">You will not-</h1>
      <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
        <li>
          use our Online Services or Content in any way not expressly permitted
          by these Terms;
        </li>
        <li>
          copy, modify or harvest data, Content, or materials from the Online
          Services;
        </li>
        <li>
          remove or alter, any copyright or other proprietary rights or notices
          on the Online Services;
        </li>
        <li>misrepresent your identity or provide any false information;</li>
        <li>interfere with the operation of our Online Services;</li>
        <li>
          share any password with any third parties or use any third‐party’s
          password;
        </li>
        <li>
          engage in commercial, competitive, or viral messaging, or sending of
          unsolicited advertisements, or similar communications, including
          harmful computer code, viruses, or malware;
        </li>
        <li>
          use the Online Services in any way that could, in our sole judgment,
          interfere with any other party's use or enjoyment of the Online
          Services, impair our networks or servers, or expose us or any third
          party to any claims or liability whatsoever, or use software or other
          means to access, "scrape," "crawl," or "spider" any web pages or other
          services from the Online Services. If you are blocked from the Online
          Services (including by blocking your IP address), you agree not to
          implement any measures to circumvent such blocking;
        </li>
        <li>
          directly or indirectly authorize anyone else to take actions
          prohibited in this section; or
        </li>
        <li>
          attempt to reverse engineer any of the software used to provide the
          Online Services.
        </li>
      </ol>
      <h1 className="my-4">You agree that-</h1>
      <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
        <li>you will comply with all applicable laws and regulations; and</li>
        <li>
          you represent and warrant that you are at least 13 years of age, and
          that, if you are between 13 and the age of majority in your state and
          otherwise not emancipated, a parent and/or guardian agrees to these
          Terms on your behalf.
        </li>
      </ol>
      <h1 className="my-6">
        We may take any measures we deem appropriate, in our sole discretion and
        permitted by law, to enforce these Terms.
      </h1>

      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Posting Messages, Comments or Content
      </h1>
      <h1 className="my-4">You will not-</h1>
      <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
        <li>
          post any improper or inappropriate content, including that which is
          obscene, libelous, harassing, threatening, harmful, inflammatory,
          invasive of privacy, or otherwise objectionable, constitutes
          advertising or solicitation, or violates applicable law.
        </li>
      </ol>
      <h1 className="my-4">You Agree That-</h1>
      <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
        <li>
          any content posted to the Online Services by third parties is only the
          opinion of the poster, is no substitute for your own research, and
          should not be relied upon for any purpose.
        </li>
      </ol>
      <h1 className="my-6">
        You are solely responsible for the content of any postings that you
        submit. Any content you submit will be routed through the Internet and
        you understand and acknowledge that you have no expectation of privacy
        regarding that content. Never assume that you are anonymous and cannot
        be identified by your posts.
      </h1>
      <h1 className="my-6">
        If you do post content or submit material to the Online Services, and
        unless we indicate otherwise, you grant the Company a non-exclusive,
        royalty-free, perpetual, irrevocable, and fully sublicensable right to
        use, reproduce, modify, adapt, publish, translate, create derivative
        works from, distribute, and display such content throughout the world in
        any media. You grant the Company and any of its sublicensees the right
        to use the name that you submit in connection with such content, if they
        choose. You represent and warrant that you own or otherwise control all
        of the rights to the content that you post; that the content is
        accurate; that use of the content you supply does not violate these
        Terms and will not cause injury to any person or entity; and that you
        will indemnify the Company or its affiliates for all claims resulting
        from any content that you supply.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Restrictions on Use of Online Services
      </h1>
      <h1 className="my-6">
        Subject to these Terms, the Company grants you a personal,
        noncommercial, non‐transferable, non‐exclusive, revocable, limited
        license to view the Content on our Online Services for the sole purpose
        of obtaining information regarding our products. All rights, title, and
        interest in and to the Online Services, including the Content, and all
        intellectual property rights, including all copyright, trademark,
        patent, and trade secret rights will remain with the Company and our
        licensors and vendors. No ownership interest is transferred to you or
        any other entity by virtue of making the Content available on the Online
        Services, granting you a license to use Online Service, or your entering
        into this Agreement.
      </h1>
      <h1 className="my-6">
        We may terminate this license at any time for any reason. If you breach
        any of these Terms, your license to the Online Services and its Content
        terminates immediately. Upon the termination of this license, you must
        stop using the Online Services, including all Content, and return or
        destroy all copies, including electronic copies, of the Content in your
        possession or control.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Copyright Infringement ‐ DMCA Notice
      </h1>
      <h1 className="my-6">
        The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides
        recourse for copyright owners who believe that material appearing on the
        Internet infringes their rights under US copyright law. If you believe,
        in good faith, that content or material on our Online Services infringes
        a copyright owned by you, you (or your agent) may send the Company a
        notice requesting that the material be removed or access to it blocked.
      </h1>
      <h1 className="my-6">
        Notices and counternotices with respect to the Online Services should be
        sent to the applicable address below:
      </h1>
      <h1 className="my-6">
        Mark Cuban Cost Plus Drug Company, PBC <br />
        2909 Taylor Street, Suite A <br />
        Dallas, Texas 75226 <br />
        legal@costplusdrugs.com
      </h1>
      <h1 className="my-6">
        The notice must include the following information: (a) a physical
        signature of a person authorized to act on behalf of the owner of an
        exclusive right that is allegedly infringed; (b) identification of the
        copyrighted work claimed to have been infringed; (c) identification of
        the material that is claimed to be infringing or the subject of
        infringing activity; (d) the name, address, telephone number, and email
        address of the complaining party; (e) a statement that the complaining
        party has a good faith belief that use of the material in the manner
        complained of is not authorized by the copyright owner, its agent or the
        law; and (f) a statement that the information in the notification is
        accurate and, under penalty of perjury, that the complaining party is
        authorized to act on behalf of the owner of an exclusive right that is
        allegedly infringed. If you believe in good faith that a notice of
        copyright infringement has been wrongly filed against you, the DMCA
        permits you to send us a counternotice. Notices and counter‐notices must
        meet the then‐current statutory requirements imposed by the DMCA.
      </h1>
      <h1 className="my-6 lg:text-xl text-md text-blue-600 font-bold">
        Unsolicited Idea Submission Policy
      </h1>
      <h1 className="my-6">
        It is our policy not to accept or consider unsolicited ideas or offers
        to sell intellectual property. We ask that you please do not submit any
        such ideas or offers to us or our employees or contractors.
      </h1>
      <h1 className="my-6">
        {" "}
        This policy is intended to avoid potential misunderstandings if our
        technology, products, or services may seem similar to a submission made
        to the company. If you still choose to make any submission to us, you
        agree as follows, regardless of any statements made in your submission:
      </h1>
      <ol style={{ listStyleType: "square", paddingLeft: "20px" }}>
        <li>We owe you no compensation;</li>
        <li>There is no duty of confidentiality between us and you;</li>
        <li>
          Your submission automatically becomes our property, and we may use or
          redistribute the contents of that submission in any way for any
          purpose;
        </li>
        <li>
          We are free to acquire, develop, and sell services and products that
          may be competitive to those you offer or suggest; and
        </li>
        <li>
          it is your responsibility to protect your own intellectual property;
          you should not make a submission to us if you have concerns about
          intellectual property.
        </li>
      </ol>
      <h1 className="my-6">
        If you are uncertain about the meaning of this policy or the legal
        ramifications of submitting materials to us, you should consult with
        your attorney before making a submission.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Links
      </h1>
      <h1>
        While visiting our Online Services, you may go to a link to other online
        websites, mobile websites, platforms, services, and applications
        (“Weblinks”) and leave our Online Services. For your convenience, we
        provide Weblinks to other online content or sites that may contain
        information that may be useful or interesting to you. We do not endorse,
        nor are responsible for, the content, accuracy or accessibility of the
        content of Weblinks operated by third parties. You are solely
        responsible for your dealings with such third parties and should review
        the Terms and privacy policies of such third parties.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        No Warranty
      </h1>
      <h1>
        Nothing within these Terms should be meant or implied to be a warranty.
        You use the Online Services at your own risk. We do not guarantee the
        accuracy, completeness, timeliness, correctness or reliability of any
        content available through the Online Services. Online Services are
        provided to you when available and are provided on an “as is” basis. We
        make no representation that use of our Online Services will be
        uninterrupted or error free, or free of viruses or other harmful
        components.
      </h1>
      <h1 className="mt-6">
        Some states do not allow a Terms of Use to have a “no warranties”
        provision, and even though these Terms make no warranty, if your state
        does not allow this type of limitation, this paragraph will not apply to
        you.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Limitation of Liability
      </h1>
      <h1 className="mb-6">
        You agree that we, HealthDyne and each of our affiliates (the “Released
        Parties”) have no liability for any loss arising out of, or relating to:
        these Online Services; any third party site or program accessed through
        the Online Services; Any acts or omissions by us or any third party;
        and/or your access or use of the Online Services. This limitation of
        liability includes any claim based on warranty, contract, tort, strict
        liability, or any other legal theory.
      </h1>
      <h1 className="mb-6">
        This limitation of liability does not apply if you are a New Jersey
        resident. With respect to residents of New Jersey, any Released Parties
        are not liable for any damages unless such damages are the result of our
        negligent or reckless acts or omissions; and any Released Parties are
        not, in any case, liable for indirect, incidental, special,
        consequential or punitive damages.
      </h1>
      <h1>
        Other states may also limit liability. If your state does not allow this
        type of limitation, one or more of the limitations above may not apply
        to you.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Indemnification
      </h1>
      <h1>
        You agree to defend, indemnify, and hold harmless any Released Parties
        from any claim by third parties, including reasonable attorneys' fees
        for counsel of our own choosing, arising out of or related to your
        breach of the Terms or any copyright infringement, misappropriation,
        misuse, gross negligence, intentional misconduct, or violation of
        applicable law relating to your use of the Online Services or Content.
        You may not transfer or assign any rights or obligations under this
        Agreement. In any litigation, you will cooperate with us in asserting
        any available defenses.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Export Controls
      </h1>
      <h1 className="mb-6">
        You may not use, export, reexport, import, sell, transfer, or proxy our
        Online Services or Content unless such activity is permitted by these
        Terms and such activity is not prohibited by United States law, the laws
        of the jurisdiction in which you receive our Online Services, or any
        other applicable laws and regulations. In particular, but without
        limitation, the Online Services and/or Content may not be exported,
        re‐exported or made available in any manner (a) into any U.S. embargoed
        countries or (b) to anyone on the U.S. Treasury Department's list of
        Specially Designated Nationals or the U.S. Department of Commerce Denied
        Person's List or Entity List.
      </h1>
      <h1>
        By using our Online Services, you represent and warrant that you and any
        ultimate beneficiary of our Online Services are not located in any such
        country or on any such list. You also agree that you will not use our
        Online Service for any purposes prohibited by U.S. law, including,
        without limitation, the development, design, manufacture or production
        of nuclear missiles or chemical or biological weapons.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Resolving Disputes
      </h1>
      <h1>
        PLEASE READ THIS SECTION CAREFULLY IT MAY SIGNIFICANTLY AFFECT YOUR
        LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT
      </h1>
      <h1 className="my-6">
        Informal Resolution. Before filing a claim in connection with these
        Terms or the Online Services, you agree to try to resolve the dispute
        informally. Contact Mark Cuban Cost Plus Drug Company, PBC Attention:
        Legal Department, 2909 Taylor Street, Suite A, Dallas, Texas 75226 If
        the dispute is not resolved within 30 days of contact, you or we may
        bring a formal arbitration proceeding as described below.
      </h1>
      <h1>
        Agreement to Arbitrate. You and we agree to resolve any claims relating
        to these Terms, or the Online Services, through final and binding
        arbitration, except as indicated below under “Exceptions to Agreement to
        Arbitrate” or where prohibited by law. The arbitration will be held in
        Texas. For residents outside the United States, arbitration will be
        initiated in Dallas, Texas, or a location agreed to by the parties. You
        and we agree to submit to the personal jurisdiction of any state or
        federal court in the state of Texas to compel arbitration, stay
        proceedings pending arbitration, or to confirm, modify, vacate, or enter
        judgment on the award entered by the arbitrator.
      </h1>
      <h1 className="my-6">
        Exceptions to Agreement to Arbitrate. Either you (or we) may assert
        claims in the small claims court in Dallas County, Texas or any other
        U.S. county in which we have a principal business address, provided that
        the informal dispute resolution described above was unsuccessful and the
        claim is eligible to be filed. Either party may bring a lawsuit solely
        for injunctive relief to stop unauthorized use or abuse of the Online
        Services or intellectual property infringement (for example, trademark,
        trade secret, copyright, or patent rights) without first engaging in
        arbitration or the informal‐resolution process described above. The
        agreement to arbitrate does not apply to claims that may not be
        arbitrated as a matter of law. Arbitration does apply to all other
        claims relating to these Terms or the Online Services including (1) the
        interpretation, formation, performance, or breach of the Terms, (2)
        whether any part of the Terms is void or voidable, (3) whether a claim
        is subject to arbitration, and/or (4) whether arbitration has been
        waived due to litigation conduct.
      </h1>
      <h1>
        Arbitration Procedures. The arbitration will be conducted by a single
        arbitrator, governed by the Consumer Arbitration Rules of the American
        Arbitration Association (“AAA”), (www.adr.org/rules), unless otherwise
        agreed to by the parties. You may also obtain the Consumer Arbitration
        Rules by calling AAA at 1‐800‐778‐7879, TTY 711.
      </h1>
      <h1 className="my-6">
        Arbitration and Attorney's Fees. Payment of all filing, administration,
        and arbitrator costs and expenses imposed by AAA will be governed by the
        Consumer Arbitration Rules, provided that if you are initiating an
        arbitration against us and the value of the relief sought is $10,000 or
        less, then we will advance all filing, administrative and arbitration
        costs and expenses imposed by AAA (subject to reimbursement if the
        arbitrator finds the arbitration to be frivolous or asserted for an
        improper purpose). You are responsible for all other additional costs
        that you may incur in the arbitration, including attorney's fees and
        expert witness costs, unless we are otherwise specifically required to
        pay such fees under applicable law. The decision of the arbitrator will
        be in writing and binding and conclusive on us and you, and judgment to
        enforce the decision may be entered by any court of competent
        jurisdiction. You agree that dispositive motions, including without
        limitation, motions to dismiss and motions for summary judgment, will be
        allowed in the arbitration. The arbitrator must follow these rules and
        can award the same damages and relief as a court, including injunctive
        or other equitable relief and attorneys’ fees. You and we agree not to
        seek any attorneys’ fees and expert witness costs unless the arbitrator
        finds that a claim or defense was frivolous or asserted for an improper
        purpose. Applicable law may allow the arbitrator to award attorneys’
        fees and costs to the prevailing party.
      </h1>
      <h1>
        Except as explicitly provided in these Terms, if any clause within these
        arbitration provisions is found to be illegal or unenforceable, that
        clause will be severed from these arbitration provisions, and the
        remainder of the arbitration provisions will be given full force and
        effect. The terms of these arbitration provisions will also apply to any
        claims asserted by you against any present or future parent or
        affiliated company of ours arising out of your use of the Online
        Services.
      </h1>
      <h1 className="my-6">
        No Class Actions. PLEASE READ THIS SECTION CAREFULLY – IT MAY
        SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS
      </h1>
      <h1>
        BY AGREEING TO THIS ARBITRATION AGREEMENT, YOU ARE GIVING UP YOUR RIGHT
        TO GO TO COURT, INCLUDING YOUR RIGHT TO A JURY TRIAL AND TO PARTICIPATE
        IN A CLASS ACTION. YOU UNDERSTAND THAT BY AGREEING TO THIS ARBITRATION
        AGREEMENT AND CLASS ACTION WAIVER, YOU MAY ONLY BRING CLAIMS AGAINST US
        AND OUR RELATED PARTIES IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF
        OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE
        PROCEEDING. IF YOU DO NOT AGREE TO ARBITRATION, YOU ARE NOT AUTHORIZED
        TO USE THE ONLINE SERVICES IN ANY WAY.
      </h1>
      <h1 className="my-6">
        If any court or arbitrator determines that this “No Class Actions”
        section is void or unenforceable for any reason, or that an arbitration
        can proceed on a class basis, then the arbitration provisions set forth
        above will be deemed null and void in their entirety, and the parties
        will be deemed to have not agreed to arbitrate disputes.
      </h1>
      <h1>Changes to this Section</h1>
      <h1>
        We will provide 30 days’ notice of any changes to this section.
        Amendments will become effective thirty days after we provide such
        notice. If a court or arbitrator decides that this subsection on
        “Changes to this Section” is not enforceable or valid, then this
        subsection will be severed from the section entitled “Resolving
        Disputes,” and the court or arbitrator will apply the first “Resolving
        Disputes” section in existence after you began using the Online
        Services.
      </h1>
      <h1 className="my-6">Survival</h1>
      <h1>
        This “Resolving Disputes” section will survive any termination of your
        account, enrollment in any program, eligibility for coverage, or the
        Online Services.
      </h1>
      <h1 className="my-6 lg:text-3xl text-xl text-blue-600 font-semibold">
        Survival and Assignment
      </h1>
      <h1 className="mb-6">
        Your obligations under the following sections survive termination of
        this Agreement:
      </h1>
      <ol>
        <li>Agreement and Terms;</li>
        <li>Important Note Regarding Content;</li>
        <li>User IDs;</li>
        <li>License to Use the Online Services and Content Ownership;</li>
        <li>Restrictions on Use of Online Services;</li>
        <li>Posting Messages, Comments or Content;</li>
        <li>Copyright Infringement – DMCA Notice;</li>
        <li>NO WARRANTY;</li>
        <li>LIMITATION OF LIABILITY;</li>
        <li>Export Controls;</li>
        <li>Governing Law and Statute of Limitations;</li>
        <li>Severability;</li>
        <li>Miscellaneous; and</li>
        <li>Additional Product Information</li>
      </ol>
      <h1 className="mt-6">
        You may not transfer or assign any rights or obligations under this
        Agreement. The Company may transfer or assign its rights and obligations
        under this Agreement.
      </h1>
    </div>
    </div>
  );
};

export default TermsPolicies;
