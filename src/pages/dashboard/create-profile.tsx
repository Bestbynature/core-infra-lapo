import { useEffect, useState } from "react";
import { BlueButton, Header, RHFInput } from "../../components";
import RHFSelect from "../../components/rhf-select";
import { PlusIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";
import { useForm } from "../../utils/context/use-form";

const CreateProfile = () => {
  return (
    <main className="">
      <Header
        title="Create Profile"
        description="Fill in profile details and add card fee."
      />
      <CreateProfileForms />
    </main>
  );
};

export default CreateProfile;

interface ProfileFormData {
  cardName: string;
  binPrefix: string;
  cardScheme: string;
  expiration: number;
  description: string;
  currency: string;
  branchBlacklist: string;
}

interface FeeData {
  name: string;
  value: number | string;
  frequency: string;
  currency: string;
  time: string;
  accountPad: string;
  account: string;
}

const CreateProfileForms = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    cardName: "",
    binPrefix: "",
    cardScheme: "",
    expiration: 0,
    description: "",
    currency: "",
    branchBlacklist: "",
  });

  const { formData: contextFormData, setFormData: setContextFormData } =
    useForm();

  const [fees, setFees] = useState<FeeData[]>([]);

  interface ContextFeeData {
    feeName?: string;
    value?: number | string;
    feeFrequency?: string;
    currency?: string;
    time?: string;
    accountPad?: string;
    account?: string;
  }

  useEffect(() => {
    if (contextFormData.length > 0) {
      setFees(
        (contextFormData as ContextFeeData[]).map((item) => ({
          name: String(item.feeName ?? ""),
          value: item.value ?? "",
          frequency: String(item.feeFrequency ?? ""),
          currency: String(item.currency ?? ""),
          time: String(item.time ?? ""),
          accountPad: String(item.accountPad ?? ""),
          account: String(item.account ?? ""),
        }))
      );
    }
  }, [contextFormData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "expiration" ? parseInt(value) || 0 : value,
    }));
  };

  const handleCreateProfile = () => {
    const mergedData = {
      profileDetails: formData,
      fees: contextFormData.map((fee) => ({
        feeName: fee.feeName,
        value: fee.value,
        feeFrequency: fee.feeFrequency,
        currency: fee.currency,
        time: fee.time,
        accountPad: fee.accountPad,
        account: fee.account,
      })),
    };

    alert("Profile created successfully!");

    setFormData({
      cardName: "",
      binPrefix: "",
      cardScheme: "",
      expiration: 0,
      description: "",
      currency: "",
      branchBlacklist: "",
    });

    setContextFormData([]);

    console.log("Merged Profile Data:", mergedData);
  };

  const formFields = [
    {
      id: "cardName",
      label: "Card Name",
      placeholder: "Enter card name",
      type: "text",
      required: true,
      component: "input",
    },
    {
      id: "binPrefix",
      label: "Bin Prefix",
      placeholder: "00000000",
      type: "text",
      required: true,
      component: "input",
    },
    {
      id: "cardScheme",
      label: "Card Scheme",
      placeholder: "",
      required: true,
      options: [
        {
          label: "Verve",
          value: "verve",
        },
        {
          label: "Visa",
          value: "visa",
        },
        {
          label: "MasterCard",
          value: "mastercard",
        },
      ],
      component: "select",
    },
    {
      id: "expiration",
      label: "Expiration",
      placeholder: "",
      type: "number",
      required: true,
      component: "input",
    },
    {
      id: "description",
      label: "Description",
      placeholder: "",
      type: "text",
      required: false,
      component: "input",
    },
    {
      id: "currency",
      label: "Currency",
      placeholder: "",
      required: true,
      options: [
        {
          label: "Naira",
          value: "NGN",
        },
        {
          label: "Dollar",
          value: "USD",
        },
      ],
      component: "select",
    },
    {
      id: "branchBlacklist",
      label: "Branch Blacklist",
      placeholder: "",
      required: false,
      options: [
        {
          label: "Head Office",
          value: "head_office",
        },
        {
          label: "Branch A",
          value: "branch_a",
        },
      ],
      component: "select",
    },
  ];

  const tableHeaders = [
    "Name",
    "Value",
    "Frequency",
    "Currency",
    "Time",
    "Account Paid",
    "Account",
  ];

  const { setIsModalOpen, setIsAddFeeModalOpen } = useModal();

  const handleAddFeeModal = () => {
    setIsAddFeeModalOpen(true);
    setIsModalOpen(true);
  };

  return (
    <form className="flex flex-col gap-4">
      <section className="rounded-xl bg-white border border-[#E2E2E2] flex flex-col gap-6  p-4">
        <h2 className="text-lg font-medium text-primary">Profile Details</h2>
        <div className="w-[85%]">
          <div className="grid grid-cols-2 gap-y-5 gap-x-[10%]">
            {formFields.map((field) => {
              return field.component === "select" ? (
                <RHFSelect
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  options={field.options || []}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={String(formData[field.id as keyof ProfileFormData])}
                  onChange={handleChange}
                />
              ) : (
                <RHFInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={String(formData[field.id as keyof ProfileFormData])}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="rounded-xl bg-white border border-[#E2E2E2] p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-medium text-primary">Fees</h1>
          <div className="">
            <BlueButton
              label="Add Fee"
              icon={<PlusIcon />}
              onClick={handleAddFeeModal}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] border border-[#EAECF0] tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fees.length === 0 ? (
                <tr>
                  {tableHeaders.map((_, index) => (
                    <td
                      key={index}
                      className=" whitespace-nowrap text-sm border border-[#EAECF0] text-gray-500 text-center"
                    >
                      <div className="h-10" />
                    </td>
                  ))}
                </tr>
              ) : (
                fees.map((fee) => (
                  <tr
                    key={fee.time}
                    className="hover:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.accountPad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {fee.account}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      <div className="">
        <button
          className="mt-4 px-[18px] py-[10px] bg-[#014DAF] text-white rounded-lg font-medium text-sm"
          type="button"
          onClick={handleCreateProfile}
        >
          Create Profile
        </button>
      </div>
    </form>
  );
};
